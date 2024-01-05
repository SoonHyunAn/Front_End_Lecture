//선언적 함수
function add(a, b) { // a, b : 매개 변수, parameter, argument
    return a + b;     // return : 반환값
}

console.log(add(3, 4));
console.log(add(8, 9));

// 익명 (Anonymous) 함수 : 함수의 이름이 따로 지정된 것이 아니라 한 const 변수에 함수를 집어 넣음
// 윈도우 프로그램 같은 거 할 때 이벤트 처리할 때 주로 사용함. (클릭 같은 것.)
const anonymousSum = function (a, b) {
    return a + b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(8, 9));

// 화살표 함수, 람다 함수: 실전에서 주로 사용하는 함수
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(8, 9));



