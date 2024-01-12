// 중첩 조건문 (Nested If)
// 윤년 계산기 - 4년마다 돌아옴, 100으로 나눠지면 평년, 400으로 나눠지면 윤년

/* let year =2104; 
if (year%4==0){
    if(year%100==0)
    {
        if(year%400==0)
        {console.log(`${year}년은 윤년입니다.`);}
        else
        {console.log(`${year}년은 평년입니다.`);}
    }
    else{
        console.log(`${year}년은 윤년입니다.`);
    }
}
    
else 
    console.log(`${year}년은 평년입니다.`);
 */

/* num2=Math.ceil(Math.random()*100); // 1~100의 랜덤값
let result = (num2%2==0)? '짝수' : '홀수'; // 조건 ? 참일 때 : 거짓일 때
console.log(`${num2}은/는 ${result}입니다.`);
 */

year = 2100;
let result = ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) ? '윤년' : '평년';
console.log(`${year}은/는 ${result}입니다.`);



