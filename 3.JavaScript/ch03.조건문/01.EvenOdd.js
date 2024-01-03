  // 홀 짝
  let num1=Math.ceil(1.3); // 1.3 보다 큰 가장 가까운 정수
  let num2=Math.ceil(Math.random()*100); // 1~100의 랜덤값

  if (num2 % 2 ==0 ){
    console.log(`${num2} 은/는 짝수입니다.`);
  }
  else {
    console.log(`${num2} 은/는 홀수입니다.`);
  }

  /* 
    if (num2 % 2 ==1 ){
    console.log(`${num2} 은/는 홀수입니다.`);
  }
  */

// 조건문 안에 실행문이 한개만 있는 경우 괄호({}) 생략 가능
num2=Math.ceil(Math.random()*100); // 1~100의 랜덤값
if (num2 % 2 ==0 ){
    console.log(`${num2} 은/는 짝수입니다.`);
  }
  else {
    console.log(`${num2} 은/는 홀수입니다.`);
  }

// 3항 연산자 -- 획기적으로 조건문의 길이를 줄일 수 있음, 반드시 사용해야 할 때도 발생
num2=Math.ceil(Math.random()*100); // 1~100의 랜덤값
let result = (num2%2==0)? '짝수' : '홀수'; // 조건 ? 참일 때 : 거짓일 때
console.log(`${num2}은/는 ${result}입니다.`);




