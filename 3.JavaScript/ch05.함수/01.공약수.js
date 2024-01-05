// 함수 사용의 필요성

function getDivisors(num) {
    let divisors = new Set(); //집합 형식
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            divisors.add(i); // 집합은 add로 넣어줌. 배열은 push
    }
    return divisors;
}

let divisors1 = getDivisors(12);
let divisors2 = getDivisors(30);

console.log(divisors1);
console.log(divisors2);


let cd = divisors1.Set;