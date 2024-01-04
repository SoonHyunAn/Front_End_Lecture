// 배열 (Array)
let person = ['james', 27, '남자', '프로그래머', 175.3];
console.log(person);
console.log(typeof person);         //배열은 object의 한 형태
console.log(person.length);
console.log(person[0],person[1],person[person.length-1]);

// 배열을 효율적으로 사용하기 위해 반복문 필수
// while -횟수 미지정
// for - 횟수 지정

for(let i=0; i < person.length; i++){
    console.log(person[i]);
}

for (let i=person.length-1; i>=0;i--){
    console.log(person[i]);
}

//Enhanced for -loop
console.log('Enhenced for loop');
for (let item of persopn)
    console.log(item);