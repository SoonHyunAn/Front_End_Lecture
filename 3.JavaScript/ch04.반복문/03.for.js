// for
// 1~1000 합
let sum1 = 0;
for (let i = 1; i<=1000; i++){
    sum1+=i;
}
console.log(sum1);

// 홀수합
let sum2=0;
for (let i = 1; i<=1000; i+=2){
    sum2+=i;
}
console.log(sum2);

// 짝수합

let sum3=0;
for (let i = 0; i<=1000; i+=2){
    sum3+=i;
}
console.log(sum3);

// 1~10 곱
let sum4=1;
for (let i = 1; i<=10; i++){
    sum4*=i;
}
console.log(sum4);


// 배열의 요소 출력
// ele1, ele2 ...
let fruits =['사과', '감', '귤', '배']
let fruitString ='';
for (let fruit of fruits){
    fruitString+=fruit+', ';
}
console.log(fruitString);


