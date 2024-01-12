// 1. 만 나이를 계산하세요.
// 생년, 월, 일을 변수로 설정해서

function MyAge(a, b, c) {
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth() + 1;
    let todayDay = new Date().getDay();
    console.log(`오늘의 날짜는 ${todayYear}년 ${todayMonth}월 ${todayDay}일 입니다.`);
    console.log(`제 생일은 ${a}년 ${b}월 ${c}일 입니다.`);
    let age = 0;
    if (todayMonth >= b) {
        if (todayDay > c)
            age = todayYear - a;
    }
    else
        age = todayYear - a - 1;
    return age;
}

let year = 1996;
let month = 7;
let day = 6;
var mybirth = { year: 1996, month: 7, day: 6 };

console.log(`저는 만나이로 ${MyAge(year, month, day)}살 입니다.`);


// 2. 백준 31090
// 다음의 사례에 대해서 good/bye를 출력
// 2023, 2024, ..., 2040
// 단, 조건에 맞는지를 확인해주는 함수 isDivisible(year)를 만들어서 해결하세요.
function isDivisible(year) {
    if ((year + 1) % (year - 2000) == 0)
        console.log(year, ' good');
    else
        console.log(year, ' bye');
}

for (let i = 2023; i <= 2040; i++)
    isDivisible(i);


// 3. array를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
// [24, 67, 45, 97, 43] 의 결과를 출력하세요.
// 76176 - 576 - 4489 - 2025 - 9409 -1849
function caculate(arr) {
    let sum = 0;
    let sumSquare = 0;
    let squareSum = 0;

    for (let num of arr) {
        sum += num;
    }
    sumSquare = sum * sum;
    for (let num of arr) {
        squareSum += num * num;
    }
    console.log(`합의 제곱은 ${sumSquare}`);
    console.log(`제곱의 합은 ${squareSum}`);

    return sumSquare - squareSum;
}

let mainArray = [24, 67, 45, 97, 43];
console.log(`두 값의 차는 ${caculate(mainArray)}입니다.`);


// 카페에 올리기