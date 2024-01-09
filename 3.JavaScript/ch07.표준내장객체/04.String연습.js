// 연습문제
// 1. 1에서 1000 사이에 0은 몇번, 1은 몇번, ... 9는 몇번 사용되었는가?
// tip - 123456789..9991000

let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;

// 1이 몇번?
for (let i = 0; i <= 9; i++) {
    let pattern = new RegExp('[^' + i + ']', 'g');
    console.log('[^' + i + ']');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}

// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);


// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가? 답: 29700

//--고찰: 모든 시간을 4글자로 만들어서 하나의 문자열로 만들면?
let allTimeStr = [];
let result = 0;
for (let i = 0; i < 24; i++) {
    i = String(i);
    if (i.length == '1')
        i = '0' + i;
    for (let k = 0; k < 60; k++) {
        k = String(k);
        if (k.length == '1')
            k = '0' + k;
        allTimeStr.push(i + k);
    }
}
for (time of allTimeStr) {
    for (let i = 0; i < time.length; i++)
        if (time[i] == 3) {
            result += 60;
            break;
        }
}
console.log(`3이 포함된 시간초를 모두 더하면 ${result}입니다.`);

/* 
굳이 할 필요가 없다...
let oneLine = '';
for (let i = 0;i <allTimeStr.length; i++){
    oneLine += allTimeStr[i];
} */

/* 
=======강사님 방법=======
let displayTime = 0;
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        let clock = hour + ':' + minute;
        if (clock.indexOf('3') >= 0)
            displayTime += 60;
    }
}
*/

/* 
-- 시간과 분에서 각각 3이 포함된 경우의 수를 count 해서 60을 곱해서 진행 --
let hourCount = 0; // 3이 포함된 시간
let minCount = 0;  // 3이 포함된 분

for (let i = 0; i < 24; i++) {  
    i = String(i);      
    i = i.split('');    
    for (let k = 0; k < i.length; k++) {   
        if (i[k] == 3)            
            hourCount++;
    }
    i = Number(i.join(''));
}

for (let i = 0; i < 60; i++) {
    i = String(i);
    i = i.split('');
    for (let k = 0; k < i.length; k++) {
        if (i[k] == i[k + 1] && i[k] == 3) {
            minCount++;
            break;
        }
        if (Number(i[k]) == 3)
        minCount++;
    }
    i = Number(i.join(''));
}

let result = hourCount * 3600 + (24 - hourCount) * minCount * 60;
console.log(result);
 */

/*
--간단하게 하는 방법--
let totalSec = 0;       // 전체를 0으로 맞춤
for (let h = 0; h < 24; h++) {      //시간 0부터 시작, 시간이 24보다 클때까지 돌림, 미리 한시간씩 더함.
    for (let m = 0; m < 60; m++) {
        if (h % 10 == 3 || Math.floor(m / 10) == 3 || m % 10 == 3) { 
// 시간을 10으로 나눴을 때 나머지가 3인 경우 - 03, 13, 23시
// 분을 10으로 나눈 값을 버림 했을 때 3인 경우 - 30~39분
// 분을 10으로 나눴을 때 나머지가 3인경우 - 03, 13, 23, 33, 43, 53분
// 겹쳐도 상관 없음. 왜냐하면 이중포문에서 한 가지 경우에 더해지는 값은 60 뿐이기 때문
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec);
*/


// 3. 두개의 세자리수를 곱해서 나온 결과가 Palindrome일 때
// 가장 큰 palindrome 수와 그 값은 어떤 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

let all = [];
let max = 0;
let num1 = 0, num2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = i; k <= 999; k++) { // 굳이 같은 부분을 또 돌릴 필요가 없기 때문
        let palindrome = i * k;
        if (isPalindrome(String(palindrome)) == true) {
/*             all.push(Number(palindrome));
 */            if (Number(palindrome) > max) {
                max = palindrome;
                num1 = i;
                num2 = k;
            }
        }
    }
}
/* 
    }
    }
    for (let num of all) {
        if (num > max)
            max = num;
    }
    if (max % i == 0) {
        num1 = i;
        num2 = max / i;
    }
} */
console.log(`가장 큰 Palindrome는 ${max}이고, 이는 ${num1} X ${num2}입니다.`);


// 4. C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.
let root = "C:/Workspace/WebProject/3.JavaScript/ch07.표준내장객체/04.String연습.js";
console.log(root.substring(root.lastIndexOf('/') + 1)); // 마지막에 나오는 인덱스 값.

// split 후 맨 마지막 요소
let pathArr = path.split('/');
console.log(pathArr[pathArr.length - 1]);