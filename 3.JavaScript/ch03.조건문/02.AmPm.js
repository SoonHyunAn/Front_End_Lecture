let today = new Date();
console.log(today);             //표준시 형태
let hour = today.getHours();
console.log(hour);              // TimeZone 적용된 현재시간.
console.log(today.getMonth() + 1);  //제대로 안나옴. 인덱스로 나오는 값이라 +1을 해주어야 함.

if (hour < 12)
    console.log(`오전 ${hour} 시`);
else                                    // if (hour>=12)
    console.log(`오후 ${hour - 12} 시`);


