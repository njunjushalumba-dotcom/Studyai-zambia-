const SUBJECTS=["English Language","Literature in English","Mathematics","Biology","Chemistry","Physics","Agricultural Science","Geography","Civic Education","Social Studies","Religious Education","Music","Creative & Technology Studies","Entrepreneurship","ICT"];
const FORMS=["Form 1","Form 2","Form 3","Form 4"];
const NOTES={
"English Language":"In the CBC curriculum, English Language focuses on communication skills. Key areas include reading comprehension, creative writing, grammar and oral communication. Students are expected to research independently and present findings clearly.",
"Literature in English":"Literature explores human experience through written works. Key texts include African novels, poetry and drama. Things Fall Apart by Chinua Achebe is a core text. Analyse themes, characters, setting and literary devices in your responses.",
"Mathematics":"Mathematics in CBC focuses on problem solving and application. Key topics include algebra, quadratic equations ax²+bx+c=0, geometry, statistics and financial mathematics. Always show your working step by step.",
"Biology":"Biology studies living organisms and life processes. Key topics include cell structure, photosynthesis (6CO₂+6H₂O+light→C₆H₁₂O₆+6O₂), genetics, ecology and human body systems. CBC emphasises practical investigation.",
"Chemistry":"Chemistry studies matter and its properties. Key topics include atomic structure, periodic table, chemical bonding, acids and bases, organic chemistry and stoichiometry. Practical experiments are central to CBC Chemistry.",
"Physics":"Physics studies matter, energy and their interactions. Key topics include mechanics, electricity, waves, magnetism and thermal physics. CBC Physics emphasises real-world application and problem solving.",
"Agricultural Science":"Agricultural Science covers crop production, animal husbandry, soil science and farm management. CBC emphasises practical farming skills and entrepreneurial application of agriculture in Zambia.",
"Geography":"Geography studies the physical and human environment. Key topics include map reading, climate, natural resources, population, development and Zambia's physical features. Field work and research are key CBC requirements.",
"Civic Education":"Civic Education develops responsible citizenship. Topics include human rights, democracy, the Zambian constitution, governance, and community participation. CBC requires students to apply civic knowledge in real community contexts.",
"Social Studies":"Social Studies integrates history, geography and social sciences. Topics include Zambian history, African history, culture, development and global issues. Research and critical thinking are emphasised in CBC.",
"Religious Education":"Religious Education explores world religions and moral values. Topics include Christianity, Islam, African Traditional Religion, ethics and morality. CBC encourages respectful discussion and personal reflection.",
"Music":"Music covers theory and practical performance. Key areas include notation, rhythm, melody, harmony, African music traditions and world music. CBC Music encourages creativity, composition and cultural appreciation.",
"Creative & Technology Studies":"CTS develops practical and creative skills. Topics include design, technology, materials, construction and innovation. CBC CTS is project based — students design and create real solutions to community problems.",
"Entrepreneurship":"Entrepreneurship develops business skills and innovation. Topics include business planning, marketing, financial literacy, record keeping and small business management. CBC encourages students to start real small businesses.",
"ICT":"ICT covers digital literacy and computer skills. Topics include computer basics, internet safety, word processing, spreadsheets, presentations and coding basics. CBC ICT prepares students for the digital economy."
};
const QUIZ={
"English Language":[{q:"What is the purpose of a topic sentence?",o:["To end a paragraph","To introduce the main idea of a paragraph","To provide evidence","To summarise the essay"],a:1},{q:"What does 'comprehension' mean?",o:["Writing creatively","Understanding what you have read","Memorising text","Translating language"],a:1}],
"Mathematics":[{q:"What is the quadratic formula?",o:["x = -b/2a","x = (-b ± √(b²-4ac)) / 2a","x = b² - 4ac","x = a² + b²"],a:1},{q:"What is the approximate value of π?",o:["2.14","3.14","4.13","1.73"],a:1}],
"Biology":[{q:"What gas do plants release during photosynthesis?",o:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],a:2},{q:"What is the powerhouse of the cell?",o:["Nucleus","Ribosome","Mitochondria","Vacuole"],a:2}],
"Chemistry":[{q:"What is the atomic number of Carbon?",o:["6","8","12","14"],a:0},{q:"What is the pH of a neutral solution?",o:["0","7","14","3"],a:1}],
"Physics":[{q:"What is the unit of electrical resistance?",o:["Volt","Ampere","Ohm","Watt"],a:2},{q:"What is the speed of light approximately?",o:["300,000 km/s","150,000 km/s","450,000 km/s","100,000 km/s"],a:0}],
"Agricultural Science":[{q:"What nutrient do plants need most for leaf growth?",o:["Phosphorus","Potassium","Nitrogen","Calcium"],a:2},{q:"What is the process of turning organic waste into fertiliser?",o:["Irrigation","Composting","Grafting","Pruning"],a:1}],
"Geography":[{q:"What is the capital city of Zambia?",o:["Ndola","Livingstone","Lusaka","Kitwe"],a:2},{q:"What is the longest river in Zambia?",o:["Congo River","Kafue River","Luangwa River","Zambezi River"],a:3}],
"Civic Education":[{q:"What type of government does Zambia have?",o:["Monarchy","Communist","Democratic Republic","Military"],a:2},{q:"In what year did Zambia gain independence?",o:["1960","1962","1964","1966"],a:2}],
"Music":[{q:"How many lines does a musical staff have?",o:["3","4","5","6"],a:2},{q:"What does 'forte' mean in music?",o:["Soft","Loud","Fast","Slow"],a:1}],
"ICT":[{q:"What does CPU stand for?",o:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing Unit"],a:0},{q:"What does WWW stand for?",o:["World Wide Web","Wide World Web","World Web Wide","Web World Wide"],a:0}],
"Entrepreneurship":[{q:"What is a business plan?",o:["A daily work schedule","A document outlining business goals and strategies","A list of employees","A tax document"],a:1},{q:"What does profit mean?",o:["Total sales","Money spent on business","Revenue minus expenses","Money borrowed"],a:2}],
"Literature in English":[{q:"Who wrote Things Fall Apart?",o:["Wole Soyinka","Ngugi wa Thiong'o","Chinua Achebe","Nadine Gordimer"],a:2},{q:"What is a metaphor?",o:["Comparison using like or as","Direct comparison without like or as","A type of rhyme","A narrative technique"],a:1}],
"Social Studies":[{q:"What is the name of Zambia's national currency?",o:["Rand","Kwacha","Shilling","Dollar"],a:1},{q:"Which continent is Zambia located in?",o:["Asia","Europe","Africa","South America"],a:2}],
"Religious Education":[{q:"What is the holy book of Christianity?",o:["Quran","Torah","Bible","Vedas"],a:2},{q:"What is the holy book of Islam?",o:["Bible","Torah","Quran","Vedas"],a:2}],
"Creative & Technology Studies":[{q:"What is the first stage of the design process?",o:["Building","Testing","Identifying the problem","Evaluating"],a:2},{q:"What does CTS stand for?",o:["Computer Technology Science","Creative and Technology Studies","Creative Technical Skills","Computer and Technical Studies"],a:1}]
};

let screen="login",role=null,tab="dashboard",subject="Mathematics",form="Form 1";
let msgs=[{r:"ai",t:"Mwabonwa! 👋 I am Chenjela, your AI Study Assistant for the Zambian CBC curriculum. Ask me anything about your schoolwork! 📚🇿🇲"}];
let aiLoading=false,pts=1200,streak=3,essay="",feedback=null,essayLoading=false;
let qActive=false,qIdx=0,qAns=[],qDone=false;

function gel(id){return document.getElementById(id)}

function render(){
  gel('app').innerHTML=screen==="login"?loginPage():appPage();
  bindEvents();
}

function loginPage(){
  return`<div class="login-bg"><div class="login-card">
    <div class="logo">Chenj<span>ela</span></div>
    <div class="tagline">Study Smart — Zambian CBC Curriculum 🇿🇲</div>
    <div style="font-size:18px;font-weight:600;margin-bottom:6px">Welcome!</div>
    <div style="font-size:13px;color:#8899bb;margin-bottom:24px">Choose your account type</div>
    <button class="role-btn" onclick="login('student')"><span style="font-size:22px">🎒</span><div><div style="font-weight:600">Student</div><div style="font-size:12px;color:#8899bb">AI help, quizzes and notes</div></div></button>
    <button class="role-btn" onclick="login('teacher')"><span style="font-size:22px">👨‍🏫</span><div><div style="font-weight:600">Teacher</div><div style="font-size:12px;color:#8899bb">Manage classes and progress</div></div></button>
    <button class="role-btn" onclick="login('parent')"><span style="font-size:22px">👨‍👩‍👧</span><div><div style="font-weight:600">Parent</div><div style="font-size:12px;color:#8899bb">Monitor your child</div></div></button>
    <div style="text-align:center;font-size:11px;color:#445;margin-top:16px">Made in Zambia 🇿🇲 by Precious Njunju Shalumba</div>
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
      ${getNav().map(([id,ic,lb])=>`<div class="nav-item${tab===id?' active':''}" onclick="setTab('${id}')"><span style="font-size:18px;width:24px;text-align:center">${ic}</span><span>${lb}</span></div>`).join('')}
      <div class="sidebar-bottom">
        <div class="points-chip">🏅 <span>${pts.toLocaleString()} pts</span></div>
        <button class="logout-btn" onclick="logout()">Sign Out</button>
      </div>
    </div>
    <div class="main">${getContent()}</div>
  </div>`;
}

function getContent(){
  if(tab==="dashboard")return dash();
  if(tab==="ai")return aiPage();
  if(tab==="notes")return notesPage();
  if(tab==="quiz")return quizPage();
  if(tab==="essay")return essayPage();
  if(tab==="progress")return progressPage();
  if(tab==="rewards")return rewardsPage();
  if(tab==="notifications")return notifPage();
  if(tab==="tools")return toolsPage();
  return'';
}

function subjectPills(){
  return`<div class="select-row" style="flex-wrap:wrap">${SUBJECTS.map(s=>`<button class="select-pill${subject===s?' active':''}" onclick="setSub('${s}')">${s}</button>`).join('')}</div>`;
}

function formPills(){
  return`<div class="select-row">${FORMS.map(f=>`<button class="select-pill${form===f?' active':''}" onclick="setForm('${f}')">${f}</button>`).join('')}</div>`;
}

function dash(){
  return`
    <div class="page-title">Good day! 👋</div>
    <div class="page-sub">CBC Curriculum — ${form} · Keep your ${streak}-day streak alive! 🔥</div>
    <div class="grid3">
      <div class="stat-card"><div class="stat-icon">⚡</div><div class="stat-val" style="color:#f5b400">${streak} Days</div><div class="stat-label">Streak</div></div>
      <div class="stat-card"><div class="stat-icon">🏅</div><div class="stat-val" style="color:#2a5298">${pts.toLocaleString()}</div><div class="stat-label">Points</div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-val" style="color:#00c864">14</div><div class="stat-label">Quizzes Done</div></div>
    </div>
    <div class="card">
      <div class="section-title">📚 Quick Study — ${subject}</div>
      <div class="notes-box">${NOTES[subject]||'Select a subject to view notes.'}</div>
      <button class="primary-btn" onclick="setTab('ai')">Ask AI About This →</button>
    </div>
    <div class="card">
      <div class="section-title">🎯 Today's Goals</div>
      ${[["Complete a Quiz",100],["Read Study Notes",60],["Research a Topic",0]].map(([l,p])=>`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px"><span>${p===100?'✅':'⬜'} ${l}</span><span style="color:#8899bb">${p}%</span></div>
        <div class="progress-bar-bg"><div class="progress-bar" style="width:${p}%"></div></div>
      </div>`).join('')}
    </div>
    <div class="card">
      <div class="section-title">🔔 Announcements</div>
      ${[["📐","Mathematics Assignment","Form 2 assignment due Friday.","2h ago"],["📖","Study Reminder","You have not studied English today!","5h ago"],["🔬","New Notes","Biology notes for Form 1 uploaded.","1d ago"]].map(([ic,tt,mg,tm])=>`
      <div class="notif-item">
        <div style="font-size:22px">${ic}</div>
        <div><div style="font-size:14px;font-weight:600;margin-bottom:3px">${tt}</div><div style="font-size:13px;color:#8899bb">${mg}</div><div style="font-size:11px;color:#556;margin-top:3px">${tm}</div></div>
      </div>`).join('')}
    </div>`;
}

function aiPage(){
  return`
    <div class="page-title">AI Homework Help 🤖</div>
    <div class="page-sub">Ask anything — CBC focused, step by step explanations</div>
    ${subjectPills()}
    ${formPills()}
    <div class="card">
      <div class="chat-area" id="chat">
        ${msgs.map(m=>`<div class="msg ${m.r==='ai'?'assistant':'user'}">${m.t}</div>`).join('')}
        ${aiLoading?'<div class="msg assistant">⏳ Thinking...</div>':''}
      </div>
      <div class="chat-input-row">
        <input class="chat-input" id="aiInput" placeholder="Ask about ${subject} — ${form}..." onkeydown="if(event.key==='Enter')sendAI()"/>
        <button class="send-btn" onclick="sendAI()" ${aiLoading?'disabled':''}>Send</button>
      </div>
      <div style="font-size:11px;color:#556;margin-top:8px">+10 points per question · CBC Curriculum</div>
    </div>`;
}

function notesPage(){
  return`
    <div class="page-title">Study Materials 📖</div>
    <div class="page-sub">CBC aligned notes for Forms 1-4</div>
    ${subjectPills()}
    ${formPills()}
    <div class="card">
      <div class="section-title">📄 ${subject} — ${form}</div>
      <div class="notes-box">${NOTES[subject]||'Notes coming soon for this subject.'}</div>
      <button class="primary-btn" onclick="setTab('ai')">Ask AI About This →</button>
    </div>
    <div class="card">
      <div class="section-title">💡 CBC Study Tips</div>
      ${["Research topics independently before class","Work in groups to discuss and share ideas","Apply what you learn to real life situations","Ask questions and think critically — do not just memorise","Complete all projects and assignments on time"].map((t,i)=>`
      <div style="display:flex;gap:10px;margin-bottom:10px;font-size:13px;color:#c8d0e8">
        <span style="color:#2a5298;font-weight:700">${i+1}.</span>${t}
      </div>`).join('')}
    </div>`;
}

function quizPage(){
  const qs=QUIZ[subject]||QUIZ["Mathematics"];
  if(!qActive&&!qDone)return`
    <div class="page-title">Quiz Generator ✏️</div>
    <div class="page-sub">Test your CBC knowledge and earn points</div>
    ${subjectPills()}
    ${formPills()}
    <div class="card" style="text-align:center;padding:40px">
      <div style="font-size:48px;margin-bottom:16px">🧠</div>
      <div style="font-size:20px;font-weight:600;margin-bottom:8px">${subject}</div>
      <div style="font-size:14px;color:#8899bb;margin-bottom:4px">${form} · CBC Curriculum</div>
      <div style="font-size:14px;color:#8899bb;margin-bottom:24px">${qs.length} questions · +50 points each</div>
      <button class="primary-btn" onclick="startQuiz()">Start Quiz →</button>
    </div>`;
  if(qActive&&!qDone){
    const q=qs[qIdx];
    return`
      <div class="page-title">${subject} Quiz ✏️</div>
      <div class="page-sub">${form} · Question ${qIdx+1} of ${qs.length}</div>
      <div class="card">
        <div class="progress-bar-bg" style="margin-bottom:20px"><div class="progress-bar" style="width:${(qIdx/qs.length)*100}%"></div></div>
        <div style="font-size:17px;font-weight:600;margin-bottom:20px;line-height:1.5">${q.q}</div>
        ${q.o.map((o,i)=>`<button class="quiz-opt" onclick="answerQ(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}
      </div>`;
  }
  const score=qAns.filter((a,i)=>a===qs[i].a).length;
  return`
    <div class="page-title">Quiz Results 🎯</div>
    <div class="page-sub">${subject} · ${form}</div>
    <div class="card" style="text-align:center;padding:32px">
      <div style="font-size:48px;margin-bottom:12px">${score===qs.length?'🏆':score>0?'👍':'💪'}</div>
      <div style="font-size:24px;font-weight:700;margin-bottom:8px">${score}/${qs.length} Correct</div>
      <div style="color:#8899bb;font-size:14px;margin-bottom:8px">${score===qs.length?'Perfect! Mwashinka!':score>0?'Good effort! Keep going!':'Try again — you can do it!'}</div>
      <div style="color:#f5b400;font-weight:600;font-size:15px;margin-bottom:24px">+${score*50} points earned!</div>
      ${qs.map((q,i)=>`
      <div style="text-align:left;margin-bottom:14px">
        <div style="font-size:13px;font-weight:600;margin-bottom:6px">${q.q}</div>
        ${q.o.map((o,j)=>`<div class="quiz-opt${j===q.a?' correct':qAns[i]===j&&j!==q.a?' wrong':''}" style="cursor:default;margin-bottom:5px;padding:9px 14px;font-size:13px">${String.fromCharCode(65+j)}. ${o} ${j===q.a?'✓':qAns[i]===j&&j!==q.a?'✗':''}</div>`).join('')}
      </div>`).join('')}
      <button class="primary-btn" onclick="startQuiz()">Try Again</button>
    </div>`;
}

function essayPage(){
  return`
    <div class="page-title">Assignment Help 📝</div>
    <div class="page-sub">Get AI feedback on your writing and research</div>
    <div class="card">
      <div class="section-title">✍️ Paste Your Writing or Research</div>
      <textarea class="textarea" id="essayBox" placeholder="Paste your essay, research findings, project report or any writing here for AI feedback...">${essay}</textarea>
      <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
        <button class="primary-btn" onclick="checkEssay()" ${essayLoading?'disabled':''}>${essayLoading?'Checking...':'Get AI Feedback →'}</button>
        <button class="primary-btn" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1)" onclick="essay='';feedback=null;render()">Clear</button>
      </div>
      ${feedback?`<div class="feedback-box">${feedback}</div>`:''}
    </div>
    <div class="card">
      <div class="section-title">💡 CBC Writing Tips</div>
      ${["Plan your work before writing using a mind map","Use your own research and findings — do not copy","Write in clear paragraphs with topic sentences","Include real Zambian examples where possible","Proofread your work before submitting"].map((t,i)=>`
      <div style="display:flex;gap:10px;margin-bottom:10px;font-size:13px;color:#c8d0e8">
        <span style="color:#2a5298;font-weight:700">${i+1}.</span>${t}
      </div>`).join('')}
    </div>`;
}

function progressPage(){
  const subjects=["English Language","Mathematics","Biology","Chemistry","ICT","Entrepreneurship"];
  const pcts=[72,88,65,91,78,85];
  return`
    <div class="page-title">My Progress 📊</div>
    <div class="page-sub">${form} · CBC Curriculum Performance</div>
    <div class="grid2">
      ${subjects.map((s,i)=>`
      <div class="stat-card">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px">
          <span style="font-weight:600;font-size:13px">${s}</span>
          <span style="color:${pcts[i]>=80?'#00c864':pcts[i]>=60?'#f5b400':'#ff6b6b'};font-weight:700">${pcts[i]}%</span>
        </div>
        <div class="progress-bar-bg"><div class="progress-bar" style="width:${pcts[i]}%"></div></div>
        <div style="font-size:12px;color:#8899bb;margin-top:5px">${pcts[i]>=80?'Excellent':pcts[i]>=60?'Good — keep going':'Needs attention'}</div>
      </div>`).join('')}
    </div>
    <div class="card">
      <div class="section-title">📅 Weekly Study Activity</div>
      <div style="display:flex;gap:8px;align-items:flex-end;height:90px">
        ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=>{
          const h=[60,80,45,90,70,30,55][i];
          return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:100%;height:${h}px;background:${i===3?'linear-gradient(180deg,#f5b400,#e09000)':'linear-gradient(180deg,#2a5298,#1a3a6e)'};border-radius:6px 6px 0 0"></div>
            <span style="font-size:11px;color:#8899bb">${d}</span>
          </div>`;}).join('')}
      </div>
    </div>`;
}

function rewardsPage(){
  return`
    <div class="page-title">Rewards 🏆</div>
    <div class="page-sub">Earn badges and climb the leaderboard</div>
    <div class="grid2">
      <div class="card">
        <div class="section-title">🎖️ Your Badges</div>
        <div class="badge-grid">
          ${[["🌟","First Quiz",true],["🔥","On Fire",true],["📚","Bookworm",false],["🏆","Top Student",false],["💡","Researcher",false],["⚡","Speed Learner",false]].map(([ic,nm,e])=>`
          <div class="badge-item${e?' earned':''}" style="opacity:${e?1:0.4}">
            <div class="badge-emoji">${ic}</div>
            <div class="badge-name">${nm}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="section-title">🥇 Leaderboard</div>
        ${[["🥇","Mutinta C.","Form 2",2450],["🥈","Chanda M.","Form 3",2180],["🥉","Lubasi T.","Form 1",1990],["4️⃣","Nalwimba K.","Form 4",1750],["5️⃣","You","Form 1",1200]].map(([b,n,f,p])=>`
        <div class="leaderboard-row${n==='You'?' you':''}">
          <span style="font-size:18px">${b}</span>
          <div style="flex:1"><div style="font-size:14px;font-weight:500">${n}</div><div style="font-size:12px;color:#8899bb">${f}</div></div>
          <span style="color:#f5b400;font-weight:700">${p.toLocaleString()}</span>
        </div>`).join('')}
      </div>
    </div>`;
}

function notifPage(){
  return`
    <div class="page-title">Notifications 🔔</div>
    <div class="card">
      ${[["📐","Mathematics Assignment","Form 2 assignment due Friday.","2h ago"],["📖","Study Reminder","You have not studied English today!","5h ago"],["🔬","New Notes","Biology notes for Form 1 uploaded.","1d ago"],["🎯","Quiz Done!","You scored 2/2. +100 points!","3h ago"],["🔥","Streak!","Mwashinka! 3 days in a row!","1d ago"]].map(([ic,tt,mg,tm])=>`
      <div class="notif-item">
        <div style="font-size:22px">${ic}</div>
        <div><div style="font-size:14px;font-weight:600;margin-bottom:3px">${tt}</div><div style="font-size:13px;color:#8899bb">${mg}</div><div style="font-size:11px;color:#556;margin-top:3px">${tm}</div></div>
      </div>`).join('')}
    </div>`;
}

function toolsPage(){
  return`
    <div class="page-title">Teacher Tools 🛠️</div>
    <div class="page-sub">CBC aligned tools for Zambian teachers</div>
    <div class="grid2">
      <div class="stat-card"><div class="stat-icon">👥</div><div class="stat-val">34</div><div class="stat-label">Students</div></div>
      <div class="stat-card"><div class="stat-icon">📋</div><div class="stat-val">8</div><div class="stat-label">Assignments</div></div>
    </div>
    <div class="card">
      <div class="section-title">➕ Create Assignment</div>
      <input class="chat-input" placeholder="Assignment title..." style="width:100%;margin-bottom:12px"/>
      <div class="select-row">${FORMS.map(f=>`<button class="select-pill${form===f?' active':''}" onclick="setForm('${f}')">${f}</button>`).join('')}</div>
      <div class="select-row" style="flex-wrap:wrap">${SUBJECTS.map(s=>`<button class="select-pill${subject===s?' active':''}" onclick="setSub('${s}')">${s}</button>`).join('')}</div>
      <textarea class="textarea" placeholder="Assignment description and CBC learning outcomes..." style="min-height:100px;margin-top:8px"></textarea>
      <button class="primary-btn" style="margin-top:12px">Create Assignment →</button>
    </div>
    <div class="card">
      <div class="section-title">🤖 AI Test Generator</div>
      <div style="font-size:13px;color:#8899bb;margin-bottom:14px">Generate CBC aligned tests automatically</div>
      <input class="chat-input" placeholder="Topic (e.g. Photosynthesis, Quadratic Equations...)" style="width:100%;margin-bottom:12px"/>
      <div class="select-row">${["5 Questions","10 Questions","15 Questions"].map(n=>`<button class="select-pill">${n}</button>`).join('')}</div>
      <button class="primary-btn">Generate Test with AI →</button>
    </div>`;
}

function bindEvents(){
  const c=gel('chat');
  if(c)c.scrollTop=c.scrollHeight;
}

function login(r){role=r;screen='app';tab='dashboard';render()}
function logout(){screen='login';role=null;tab='dashboard';render()}
function setTab(t){tab=t;render();setTimeout(()=>{const c=gel('chat');if(c)c.scrollTop=c.scrollHeight},100)}
function setSub(s){subject=s;render()}
function setForm(f){form=f;render()}
function resetQuiz(){qActive=false;qDone=false;qAns=[];qIdx=0}
function startQuiz(){qActive=true;qIdx=0;qAns=[];qDone=false;render()}
function answerQ(i){
  const qs=QUIZ[subject]||QUIZ["Mathematics"];
  qAns.push(i);
  if(qIdx+1>=qs.length){qDone=true;const score=qAns.filter((a,idx)=>a===qs[idx].a).length;pts+=score*50;}
  else qIdx++;
  render();
}

async function sendAI(){
  const inp=gel('aiInput');
  if(!inp||!inp.value.trim()||aiLoading)return;
  const txt=inp.value.trim();
  msgs.push({r:'user',t:txt});
  aiLoading=true;render();
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:800,
        system:`You are Chenjela, a friendly AI study assistant for Zambian secondary school students following the new Competence Based Curriculum (CBC). Help with all 15 subjects including English Language, Mathematics, Biology, Chemistry, Physics, Agricultural Science, Geography, Civic Education, Social Studies, Religious Education, Music, Creative and Technology Studies, Entrepreneurship, Literature in English, and ICT. The CBC emphasises independent research, critical thinking, group work and real life application. Give clear step by step explanations. Encourage students to research and think independently. Be warm and encouraging. Use simple language appropriate for Zambian students. Occasionally say Mwashinka for well done or Bwino for good. Current subject: ${subject}. Current form: ${form}.`,
        messages:msgs.filter((m,i)=>i>0||m.r!=='ai').map(m=>({role:m.r==='user'?'user':'assistant',content:m.t}))
      })
    });
    const d=await res.json();
    msgs.push({r:'ai',t:d.content?.map(c=>c.text||'').join('')||'Sorry, try again.'});
    pts+=10;
  }catch(e){msgs.push({r:'ai',t:'Connection error. Please check your internet and try again.'});}
  aiLoading=false;render();
}

async function checkEssay(){
  const box=gel('essayBox');
  if(!box||!box.value.trim()||essayLoading)return;
  essay=box.value.trim();
  essayLoading=true;feedback=null;render();
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:800,
        system:'You are an experienced teacher for Zambian secondary students following the CBC curriculum. Review the student writing or research and provide: 1) A score out of 10, 2) Three specific strengths, 3) Three specific improvements needed, 4) One CBC tip for independent research. Be encouraging, constructive and specific.',
        messages:[{role:'user',content:`Please review this writing from a ${form} student studying ${subject}:\n\n${essay}`}]
      })
    });
    const d=await res.json();
    feedback=d.content?.map(c=>c.text||'').join('')||'Could not get feedback. Please try again.';
  }catch(e){feedback='Connection error. Please try again.';}
  essayLoading=false;render();
}

render();
