const SUBJECTS=["English","Mathematics","Science","Literature"];
const GRADES=["Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"];
const NOTES={
English:"Literary devices include metaphor, simile, personification, and alliteration. A metaphor is a direct comparison without 'like' or 'as' — for example: 'Life is a journey.' A simile uses 'like' or 'as' — for example: 'She runs like the wind.'",
Mathematics:"Quadratic equations take the form ax² + bx + c = 0. They can be solved by factoring, completing the square, or the quadratic formula: x = (-b ± √(b²-4ac)) / 2a. The discriminant tells us the nature of the roots.",
Science:"Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Plants use chlorophyll to absorb sunlight. The process has two stages: light-dependent reactions and the Calvin cycle.",
Literature:"Things Fall Apart by Chinua Achebe follows Okonkwo, a respected Igbo warrior. The novel explores the impact of European colonialism on traditional African society. Key themes include masculinity, tradition versus change, and cultural clash."
};
const QUIZ={
English:[
{q:"What is a metaphor?",o:["A direct comparison without 'like' or 'as'","A comparison using 'like' or 'as'","A type of rhyme scheme","A narrative technique"],a:0},
{q:"What does 'protagonist' mean?",o:["The villain","The main character","The narrator","A minor character"],a:1}
],
Mathematics:[
{q:"What is the quadratic formula?",o:["x = -b/2a","x = (-b ± √(b²-4ac)) / 2a","x = b² - 4ac","x = a² + b²"],a:1},
{q:"What is the approximate value of π?",o:["2.14","3.14","4.13","1.73"],a:1}
],
Science:[
{q:"What gas do plants release during photosynthesis?",o:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],a:2},
{q:"What is the powerhouse of the cell?",o:["Nucleus","Ribosome","Mitochondria","Vacuole"],a:2}
],
Literature:[
{q:"Who wrote 'Things Fall Apart'?",o:["Wole Soyinka","Ngugi wa Thiong'o","Chinua Achebe","Nadine Gordimer"],a:2},
{q:"What does 'Things Fall Apart' primarily explore?",o:["Romance","Colonial impact on African society","Science fiction","Political satire"],a:1}
]
};
const BADGES=[
{icon:"🌟",name:"First Quiz",desc:"Complete your first quiz",earned:true},
{icon:"🔥",name:"On Fire",desc:"3 day study streak",earned:true},
{icon:"📚",name:"Bookworm",desc:"Read 10 study notes",earned:false},
{icon:"🏆",name:"Top Student",desc:"Score 90%+ on a quiz",earned:false},
{icon:"💡",name:"Curious Mind",desc:"Ask 20 AI questions",earned:false},
{icon:"⚡",name:"Speed Learner",desc:"Complete 5 quizzes in a day",earned:false}
];
const LB=[
{name:"Mutinta C.",grade:"Grade 10",pts:2450,badge:"🥇"},
{name:"Chanda M.",grade:"Grade 11",pts:2180,badge:"🥈"},
{name:"Lubasi T.",grade:"Grade 9",pts:1990,badge:"🥉"},
{name:"Nalwimba K.",grade:"Grade 12",pts:1750,badge:"4️⃣"},
{name:"You",grade:"Grade 10",pts:1200,badge:"5️⃣"}
];
const NOTIFS=[
{title:"Mathematics Test",msg:"Grade 10 test on Friday. Chapters 5-7.",time:"2h ago",icon:"📐"},
{title:"Study Reminder",msg:"You have not studied English today!",time:"5h ago",icon:"📖"},
{title:"New Notes Added",msg:"Science notes for Grade 9 uploaded.",time:"1d ago",icon:"🔬"},
{title:"Quiz Completed!",msg:"You scored 2/2 on Mathematics. +100 points!",time:"3h ago",icon:"🎯"},
{title:"Study Streak!",msg:"Mwashinka! 3 days in a row!",time:"1d ago",icon:"🔥"}
];

let screen="login",role=null,tab="dashboard";
let subject="Mathematics",grade="Grade 10";
let msgs=[{r:"ai",t:"Mwabonwa! 👋 I am Chenjela, your AI Study Assistant. Ask me anything about your schoolwork! 📚"}];
let aiLoading=false,pts=1200,streak=3;
let essay="",feedback=null,essayLoading=false;
let ttab="overview";
let qActive=false,qIdx=0,qAns=[],qDone=false;

function gel(id){return document.getElementById(id)}
function render(){gel('app').innerHTML=buildHTML();bindEvents()}
function scrollChat(){const c=gel('chat');if(c)c.scrollTop=c.scrollHeight}

function buildHTML(){
  if(screen==="login")return loginPage();
  return appPage();
}

function loginPage(){
  return`<div class="login-bg"><div class="login-card">
    <div class="logo">Chenj<span>ela</span></div>
    <div class="tagline">Study Smart — Powered by AI 🇿🇲</div>
    <div style="font-size:18px;font-weight:600;margin-bottom:6px">Welcome! Sign in as</div>
    <div style="font-size:13px;color:#8899bb;margin-bottom:24px">Choose your account type</div>
    ${[["student","🎒","Student","AI help, quizzes and study notes"],
       ["teacher","👨‍🏫","Teacher","Manage classes and track progress"],
       ["parent","👨‍👩‍👧","Parent","Monitor your child's learning"]
    ].map(([r,ic,lb,sb])=>`
    <button class="role-btn" onclick="login('${r}')">
      <span style="font-size:22px">${ic}</span>
      <div style="text-align:left">
        <div style="font-weight:600">${lb}</div>
        <div style="font-size:12px;color:#8899bb">${sb}</div>
      </div>
    </button>`).join('')}
    <div style="text-align:center;font-size:11px;color:#445;margin-top:16px">Made in Zambia 🇿🇲 by Njunjusha Alumba</div>
  </div></div>`;
}

function getNav(){
  if(role==="teacher")return[["dashboard","🏠","Dashboard"],["tools","🛠️","Tools"],["progress","📊","Progress"],["notifications","🔔","Alerts"]];
  if(role==="parent")return[["dashboard","🏠","Dashboard"],["progress","📊","Progress"],["notifications","🔔","Alerts"]];
  return[["dashboard","🏠","Dashboard"],["ai","🤖","AI Help"],["notes","📖","Notes"],["quiz","✏️","Quiz"],["essay","📝","Essay"],["progress","📊","Progress"],["rewards","🏆","Rewards"],["notifications","🔔","Alerts"]];
}

function appPage(){
  return`<div class="app-shell">
    <div class="sidebar">
      <div class="sidebar-logo">Chenj<span>ela</span></div>
      <div class="sidebar-role">${role}</div>
      ${getNav().map(([id,ic,lb])=>`
      <div class="nav-item${tab===id?' active':''}" onclick="setTab('${id}')">
        <span style="font-size:18px;width:24px;text-align:center">${ic}</span>
        <span>${lb}</span>
      </div>`).join('')}
      <div class="sidebar-bottom">
        <div class="points-chip">🏅<span>${pts.toLocaleString()} pts</span></div>
        <button class="logout-btn" onclick="logout()">Sign Out</button>
      </div>
    </div>
    <div class="main">${getContent()}</div>
  </div>`;
}

function getContent(){
  if(role==="teacher"){
    if(tab==="dashboard")return teacherDash();
    if(tab==="tools")return teacherTools();
    if(tab==="progress")return studentProgress();
    if(tab==="notifications")return notifPage();
  }
  if(role==="parent"){
    if(tab==="dashboard")return parentDash();
    if(tab==="progress")return progressPage();
    if(tab==="notifications")return notifPage();
  }
  if(tab==="dashboard")return studentDash();
  if(tab==="ai")return aiPage();
  if(tab==="notes")return notesPage();
  if(tab==="quiz")return quizPage();
  if(tab==="essay")return essayPage();
  if(tab==="progress")return progressPage();
  if(tab==="rewards")return rewardsPage();
  if(tab==="notifications")return notifPage();
  return'';
}

function pills(arr,current,fn){
  return`<div class="select-row">${arr.map(x=>`<button class="select-pill${current===x?' active':''}" onclick="${fn}('${x}')">${x}</button>`).join('')}</div>`;
}

function studentDash(){
  return`
    <div class="page-title">Good day! 👋</div>
    <div class="page-sub">Keep your ${streak}-day streak alive! 🔥</div>
    <div class="grid3">
      <div class="stat-card"><div class="stat-icon">⚡</div><div class="stat-val" style="color:#f5b400">${streak} Days</div><div class="stat-label">Streak</div></div>
      <div class="stat-card"><div class="stat-icon">🏅</div><div class="stat-val" style="color:#2a5298">${pts.toLocaleString()}</div><div class="stat-label">Points</div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-val" style="color:#00c864">14</div><div class="stat-label">Quizzes Done</div></div>
    </div>
    <div class="grid2">
      <div class="card">
        <div class="section-title">📚 Quick Study</div>
        ${pills(SUBJECTS,subject,'set
