const CASES = [
{
title:'斑点带子案',
story:'一名女子在死前喊出了“斑点带子”。',
truth:'继父利用毒蛇杀人。',
tags:['蛇','遗产','密室']
},
{
title:'红发会',
story:'一个红头发男人每天抄书就能获得高工资。',
truth:'犯罪团伙在地下挖银行通道。',
tags:['骗局','银行']
},
{
title:'跳舞小人',
story:'奇怪的小人图案让一位女人极度恐惧。',
truth:'这是黑帮使用的密码。',
tags:['密码','黑帮']
}
];

let currentCase = CASES[Math.floor(Math.random()*CASES.length)];
