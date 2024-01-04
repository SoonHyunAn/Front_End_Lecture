// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기

/* for(let i = 0; i<5;i++){
    let star ='';
    for(let i = 0; i<5;i++)
        star += '*';
    console.log(star);
} */

// 2. 다이아몬드 1사분면
for(let i = 0; i<5;i++){
    let star ='';
    for(let j = 0; j<=i; j++)
        star += '*';
    console.log(star);
}

//3. 다이아몬드 4사분면
for(let i = 0; i < 5; i++){
    let star ='';
    for(let j = 5; j > i; j--)
        star += '*';
    console.log(star);
}

//4. 다이아몬드 2사분면
for(let i = 0; i < 5; i++){
    let star ='';
    for(let j = 5; j > i; j--)
        star += ' ';
    for(let j = 5; j >5-i; j--)
        star += '*';
    console.log(star);
}

// 5. 다이아몬드 3사분면
for(let i = 0; i<5;i++){
    let star ='';
    for(let j = 0; j<i; j++)
        star += ' '; 
    for(let j = 0; j<5-i; j++)
        star += '*'; 
    console.log(star);
}

