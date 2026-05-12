function loadCase(){
const el = document.getElementById('story');
if(el){
el.innerHTML = '❓ ' + currentCase.story;
}
}

function ask(){
const q = document.getElementById('q').value;
const log = document.getElementById('log');

if(!q) return;

let reply = '❌ 无关信息';

if(q.includes('蛇') || q.includes('动物')){
reply = '🟢 接近真相';
}

if(q.includes('银行') || q.includes('地下')){
reply = '🔥 关键线索';
}

if(q.includes('密码')){
reply = '🧠 你已经非常接近';
}

log.innerHTML += `<p><b>你：</b>${q}</p>`;
log.innerHTML += `<p><b>AI：</b>${reply}</p>`;

document.getElementById('q').value = '';
}

function reveal(){
alert('🧠 真相：' + currentCase.truth);
}

function nextCase(){
currentCase = CASES[Math.floor(Math.random()*CASES.length)];
loadCase();
document.getElementById('log').innerHTML = '';
}

loadCase();
