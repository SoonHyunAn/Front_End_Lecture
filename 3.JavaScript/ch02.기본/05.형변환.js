// 자료형 변환
// 강제 변환
console.log(123, String(123));
console.log(Number('101'), Number(true), Number(false));
console.log(Number('hello'));       // NaN, Not a Number

// 아래 경우를 제외하면 모두 참 (true)
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));

// 자동 변환
// + 연산자: boolean -> number -> String
console.log(123 + true, 'bool'+true, 'string'+123); // 정수 변환, 문자열 변환, 문자열 변환

// -, *, / 연산자 : Strint -> Number
console.log(52 - '27', '8' * 8, '4'/2); // 정수 변환, 문자열 변환, 문자열 변환


// 2의 보수 (-연산)
/* 
    5       0101
    3       0011
    -3      1100
            1101 // 1을 더해줌
            
    5-3     0101
            1101 // 더하는 연산임
    2       0010
*/

// 두개의 값이 같으냐?
// 1) 변환된 값이 같으면 같다 (==)
console.log(52=='52', 52==52.0);    // T, T
console.log(true==1, false==0);     // T, T
// 2) 변환된 값과 자료형이 일치하면 참. (===)
console.log(52==='52', 52===52.0);    // F, T
console.log(true===1, false===0);     // F, F
