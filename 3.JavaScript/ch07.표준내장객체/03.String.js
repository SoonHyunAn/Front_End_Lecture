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
console.log(hello + ' 여러분!', hello.concat(' 여러분!')); // 뒤에 붙이기
console.log(hello.indexOf('하')); // 2 (인덱스 찾기)
console.log('pineapple'.lastIndexOf('p')); // 6 (지정한 값이 마지막에 나올 때 인덱스)


// 문자열을 분리하여 배열을 반환
let fruits = '사과, 배, 감, 포도';
let fruitArray = fruits.split(", ");
console.log(fruitArray);

// 문자열 일부분
const today = new Date().toISOString();
console.log(today);
// 2024-01-08T02:06:00.249Z
// 날짜 추출: 2024-01-08
console.log(today.substring(0, 10)); // T의 인덱스까지 0~9까지 잘라옴
console.log(today.substring(0, today.indexOf('T'))); // T의 인덱스를 자동으로 불러오게 함
console.log(today.split('T')[0]); // T를 기준으로 잘라서 형성된 배열에서 앞에 값을 씀

// 시간 추출: 02:06:00
console.log(today.substring(11, 19));
console.log(today.substring(today.indexOf('T') + 1, today.indexOf('.')));
console.log(new Date().toLocaleString());  // 2024. 1. 8. 오전 11:18:39

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num); // 4 -> '04', 23 -> '23' = 문자열을 더하면 자동으로 문자열로 변환되기 때문
}
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())} ` +
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

console.log(new Date());    //2024-01-08T02:27:19.000Z
console.log(myDateTime());  //2024-01-08 11:27:19
console.log(myDateTime().substring(11));
// substring: 두번째 인수를 생략하면 지정위치부터 끝까지, 마지막 인수의 인덱스를 선택할 수 없기 때문에 사용

// 공백제거
let space = '       Hello?     ';
console.log(space.trim(), ':', space.trimEnd(), ':', space.trimStart()); // 다지움:뒤만지움:앞만지움

// Method Chain
console.log(space.trim().substring(0, 5).toUpperCase());    // Hello만 남기고 자름, 대문자
console.log(space.trim().toLowerCase());    // 소문자

// 문자열 변환
const sample = 'A quick brown fox jumps over the lazy dog';
console.log(sample.replace('A', 'a'));
console.log(sample.replace('o', 'O'));  // 앞 쪽 한 개만 바뀜

// 정규 표현식 위키독스 (딥 러닝을 이용한 자연어 처리 입문 - 02-05 정규 표현식 참조). 
// 특히 비밀번호 조건 확인에 주로 사용  (문자 여부, 숫자 여부 등)
// 모든 언어에 사용
// https://wikidocs.net/21703
console.log(sample.replace(/o/g, 'O')); // 모든 o를 O로 바꿀 수 있음.

const str = 'A quick brown fox - 3 = 갈색의 재빠른 여우 the lazy dog = 5 - 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, ''); // 영어만 남김
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ 가-힇]/g, '');    // 한글만 남김
let num = str.replace(/[^0-9]/g, '');     // 숫자만 남김
let spe = str.replace(/[^-=]/g, '');      // -=기호만 남김
console.log(eng);
console.log(kor);
console.log(num);
console.log(spe)

// 문자열 찾기
console.log(hello.indexOf('안녕'));     // 결과값이 0 이상이면 찾는 문자열이 있음
console.log(hello.indexOf('안늉'));     // 결과값이 0 미만이면 찾는 문자열이 없음
if (hello.indexOf('안늉') >= 0)
    console.log('찾고싶은 단어 ${search} 이/가 문장 안에 있습니다.');
else
    console.log('찾고싶은 단어 ${search} 이/가 문장 안에 없습니다.');

