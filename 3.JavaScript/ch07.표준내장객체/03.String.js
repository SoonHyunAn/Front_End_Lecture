// String 객체

/*
한글 표기법
1. 국가 표준 : EUC-KR, ANSI, MS-Windows - 2바이트 완성형, ㄱ~ㅎ, ㅏ~ㅣ, 가 - 힣
2. Web 표준 : UTF-8 - 초성 + 중성 + 종성 각 1바이트씩 총 3바이트, 기본적으로 사용함.

++ ASCII code 1바이트로 구성, 영문자, 숫자, 특수기호 등
*/


let hello = '안녕하세요?'; // 국가 표준 기준 11바이트, Web 표준 기준 16바이트

// 속성
console.log(hello.length)

// 메소드 (method)
console.log(hello[1], hello.charAt(1));// 녕 (인덱스)
console.log(hello +' 여러분!', hello.concat(' 여러분!')); // 뒤에 붙이기
console.log(hello.indexOf('하')); // 2 (인덱스 찾기)
console.log('pineapple'.lastIndexOf('p')); // 6 (지정한 값이 마지막에 나올 때 인덱스)


// 문자열을 분리하여 배열을 반환
let fruits = '사과, 배, 감, 포도';
let fruitArray = fruits.split(", ");
console.log(fruitArray);