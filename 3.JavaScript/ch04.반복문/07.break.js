/* let sum =0;
count=0;
while(sum <= 21){
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sum+=dice; // 조건을 변화하는 실행문이 없으면 무한 루프, cmd 종료를 위해 ctrl + c
    count++;
}
console.log(count, sum); */

// 위 주사위 게임의 개선판.
let sum = 0;
while (true){
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum+=dice;
    if (sum > 21)
        break;
}
console.log(sum);

/***************************************************************/
for (let i=0; i<5; i++){
    for (let k=0; k<5; k++){
        if (k==2)
            break;
    }
    console.log('point A')  // break는 반복문 한 단계만 벗어남
}
console.log('point B')
