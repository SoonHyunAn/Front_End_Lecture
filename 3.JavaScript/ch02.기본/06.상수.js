// 상수 (Constance) 값을 변화시킬 수 없는 값.
const a='Hello';
console.log(a);
// a += 'world'; // 실행하면 runtime error 발생

const obj ={x:1, y:2};
// obj=={x:1, y:2, z:3}; //error
obj.x=10;
obj.y=20;
console.log(obj);       //객체 안의 값은 변경 가능함. 객체의 형태를 변경할 수는 없음. 참조형 변수는 가능 (포인터와 유사-주소값)
