// 배열 (Array)과 객체(Object)

// 배열은 객체의 특수한 형태
let fruitArray = ['감', '귤', '밤', '배'];
console.log(typeof fruitArray); // object

let fruitObject = { 0: '감', 1: '귤', 2: '밤', 3: '배' };
console.log(fruitArray[0], fruitObject[1]);

// 객체 (object) - 자료구조로서 객체는 파이썬의 딕셔너리, 자바의 맵과 유사 
// (자바스크립트만 키 부분 따옴표 생략 가능 - 써도 가능)
// 객체 : key와 value의 쌍
let personArray = ['james', 27, '남자', '프로그래머', 175.3];
let personInfo = { name: 'james', age: 27, gender: '남자', job: '프로그래머', height: 175.3 };
let car = {manufacturer: '현대', 'model': 'casper', color:'카키'}

console.log(personInfo);
console.log(car);

// 객체에 대한 정보 불러오기
console.log(personInfo['name']);    // 사용 X
console.log(personInfo.name);       // 주로 사용

let key = 'job';
/* console.log(personInfo.key)  */  // Error
console.log(personInfo[key]);       // 가능 - key 값을 변수로 사용하는 경우

