// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기

/* for(let i = 0; i<5;i++){
    let star ='';
    for(let i = 0; i<5;i++)
        star += '*';
    console.log(star);
} */

/* // 2. 다이아몬드 1사분면
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
} */

// 6. 완성된 다이아
/* for(let i = 0; i < 9; i++){
    let star ='';
    if (i<5){
        for(let j = 5; j > i; j--)
            star += ' ';
        for(let k = 0; k < 2*i+1; k++)
            star += '*';
    }
    else{
        for(let j = 3; j < i; j++)
            star += ' '; 
        for(let k = 1; k <= 2*(9-i)-1; k++)
            star += '*';
    }
    console.log(star);
} */

let maxDia = 7;
let N = parseInt(maxDia / 2);

for (i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let star = '';
    for (let k = 0; k < N - i; k++)
        star += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        star += '*';
    console.log(star);
}
