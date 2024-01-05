// 에러가 발생하면 프로그램 실행이 중지가 됨

// 예외처리: 에러가 나도 뒤에꺼 진행하게 해주는 것.

try {
    error.error.error();        // 에러가 발생할지도 모르는 코드를 try-catch 블록 안에 작성
} catch(e){
    console.log(e.name);        // 에러 이름
    console.log(e.message);     // 에러 설명
}


console.log('여기가 끝입니다.');// try가 없다면 실행 안됨 
