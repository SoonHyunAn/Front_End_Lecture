// 점수에 따른 학점 구하기
// 90이상 A, 10점 단위로 B, C, D, 59점 이하 F

let score = Math.ceil(Math.random()*60)+40; //41~100
let grade ='';
let sound = ''
if(score>=90)
    grade="A";
else if(score>=80)
    grade="B";
else if(score>=70)
    grade="C";
else if(score>=60)
    grade="D";
else
    grade="F";

if( score % 35 == 0)
    sound="FizzBuzz";
else if( score % 7 == 0 )
    sound="Buzz"
else if( score % 5 == 0 )
    sound="Fizz"
else
    sound=grade;


console.log(`점수 ${score}점으로 학점 ${grade} 입니다.`)
console.log(`${sound}`)


// 5의 배수면 Fizz
// 7의 배수면 Buzz
// 5, 7의 공배수면 FizzBuzz
// 아니면 숫자.




