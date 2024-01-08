// 연습문제
// 1. 1에서 1000 사이에 0은 몇번, 1은 몇번, ... 9는 몇번 사용되었는가?
// tip - 123456789..9991000

let numStr = '';
for (let i = 1; i <=1000; i++)
    numStr +=i;

console.log(numStr);
// 1이 몇번?
for (let i = 0; i <=9 ; i++){
    let pattern = new RegExp('[^'+i+']', 'g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}


// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(let i=0; i <numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);
