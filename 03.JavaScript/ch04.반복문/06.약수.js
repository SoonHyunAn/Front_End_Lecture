// 12라는 숫자가 있을 때 어떻게 반복문을 쓸 것인가

let num = 12;
let dirtn = [];

for (let i = 1; i <= 12; i++) {
    if (num % i == 0)
        if (i != 12)
            dirtn.push(i + ', ');
        else
            dirtn.push(i);
}

console.log(dirtn);

//두 수의 공약수

let num1 = 24, num2 = 60;
let commonDivisor = [];
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num % i == 0 && num2 % i == 0)
        commonDivisor.push(i);
}
console.log(commonDivisor);
