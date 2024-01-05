// Call back 함수 : 함수의 매개변수를 함수로 사용함. 자바스크립트만 주로 사용함
// promise나 async/await

function callFiveTimes(callback) {
    for (let i = 0; i < 5; i++)
        callback();
}
// 익명 함수 선언 -- 이러한 방식을 사용하지는 않음
/* const cb = function() {
    console.log('함수가 호출되었습니다.')};
 */

/* callFiveTimes(cb);
 */
// 함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적임A
callFiveTimes(function () {   // 이 방법 X
    console.log('함수가 호출되었습니다.');
});

callFiveTimes(() => {         // 이 방법 O, 익명 함수로 화살표 함수가 보편적
    console.log('함수가 호출되었습니다.');
});


