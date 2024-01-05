// 자바 스크립트의 자료형
// 1. Number
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);     //나머지
console.log(2 ** 10);   //제곱, 2의 10제곱
console.log(1.3e-8);    //1.3 X 10의 -10제곱

console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2, 5 % 2);

// 2. 문자열
console.log('He said "I love you."'); // console.log("He said "I love you.""); - errer //console.log("He said \"I love you."\"); - 이건 가능
console.log("I`ll be back.")
console.log('Back slash(\\) 기호를 사용할 때에는 두개씩 쓰면 됩니다.')

let hello = '안녕하세요';
console.log(hello[2], hello[5]); // 인덱스는 0부터 시작하기 때문에 hello[5]는 undifined

//template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '은', a + b, '입니다');
console.log(`${a} 더하기 ${b}은 ${a + b}입니다`); // 한번에 입력할 때
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`) // 복잡한 자바구문도 가능
/* 
    full year
        => fullYear     :Camel case (자바)
        => full_year    :snake case (Python)
 */

// 3. 논리형 (bool)
console.log(typeof (true), typeof (false));
console.log(2 == 2.0, 5 == 4, !('가나다' > '마바사'));   //관계 연산자, Not 연산자

let x = 10;
console.log((x > 8) || (x < -3));                          // 논리 - Or 연산자, 연산의 순서는 관계 연산자가 먼저 일어난 후 논리 연산자 일어남
console.log((x > 8) && (x < 12));                          // 논리 - and 연산자 
console.log(true > 10);                                  // 말이 안되는 이상한 관계. 하지만 true는 1, false는 0으로 변환 
