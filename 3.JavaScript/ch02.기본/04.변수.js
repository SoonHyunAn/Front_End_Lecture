// 식별자 (identifier)
// 1. 영문자, 숫자, $ ,_ 사용가능
// 2. 대소문자 구분
// 3. 숫자 시작 불가능 
// 4. 예약어(키워드) 사용 불가능
// 5. 단어 여러개 사용 권장 - camel style로 한 단어를 만들 것
// 6. 변수, 상수, 함수명 등은 소문자로 시작
// 7. 클래스 명은 대문자로 시작

// 변수 (variable)
let pi = 3.1415926535;   //신식
var radius = 10;         //구식
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius}입니다. `);

// 복합 대입 연산자
let a = 1, str = '';
a += 2;
str += 'A quick brown fox ';
str += 'jumps over the lazy dog.';
console.log(a, str);

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);      //post-increment, pre-increment
console.log(x, y);

console.log(x--, --y);      //post-decrement, pre-decrement
console.log(x, y);

// 나머지 자료형
// 함수(function)
console.log(typeof function () { });
console.log(typeof (() => { }));       //화살표(Arrow) 함수, 람다(Ramda) 함수, 익명 함수

// 객체 (object)
let obj = { x: 1, y: 2 };
console.log(typeof obj);
console.log(obj.x, obj.y);

// undefined
let alpha;
console.log(typeof alpha, typeof beta);     // 초기화 하지 않은 변수, 선언하지 않은 변수
alpha = 123;
beta = 456;
console.log(typeof alpha, typeof beta);     // 변수를 설정하지 않아도 알아서 선언함