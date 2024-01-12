//구구단

/* let num = 21;

for (let i = 1; i <= 9; i++){
    console.log(`${num} X ${i} = ${num*i}`);
} */

// 2~9단 만들기
for (let num = 2; num <= 9; num++) {
    console.log(`===${num} 단===`)
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
    console.log("\n");
}
