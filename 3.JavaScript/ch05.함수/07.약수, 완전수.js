// 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num) {
    let sum = 0;                    // 반환해야하는 값의 초기 값. 다 더해져야 함, 처음엔 아무것도 없으니까 0
    for (let i = 1; i < num; i++) { // 1~num전까지 다 돌림 숫자를. 약수 찾는 반복문
        if (num % i == 0) {         // 약수인지 여부를 확인함
            sum += i;               // 약수이면 반환해야하는 sum에다가 더해줌
        }
    }
    return sum;                     // 약수를 다 더한 값인 sum을 반환
}
console.log(sumOfDivisors(12));
console.log(sumOfDivisors(10));

// 2에서부터 10000 사이의 완전수 구하기
function perfectNumber() {
    let result = [];
    let sum = 0;
    for (let i = 2; i <= 10000; i++) {
        for (let k = 1; k < i; k++) {
            if (i % k == 0)
                sum += k;
        }
        if (sum == i)
            result.push(sum);
        sum = 0;
    }
    return result;
}
console.log(perfectNumber());

// 