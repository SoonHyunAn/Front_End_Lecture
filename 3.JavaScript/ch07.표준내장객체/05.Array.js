// Array 객체

// 1. 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);
fruits.forEach()


// 2. 배열 속성
console.log(cars.length); // 3


// 3. 배열 메소드

// 3-1. concat() - 배열을 연장
let newFruits = fruits.concat('mango', 'orange');
console.log(fruits);        // 기존 값에는 변함이 없음
console.log(newFruits);

// 3-2. join()
console.log(`내가 가지고 싶은 차는 ${cars.join(', ')} 입니다.`); // 연결자를 지정해서 배열 각각의 값을 합침

// * : 자기 파괴적(self destructive) 메소드, 본질이 바뀌는 메소드
// 3-3. pop()*
console.log(cars.pop());  // 마지막 인덱스에 있는 요소를 끄집어 냄.
console.log(cars); // 마지막 인덱스에 있던 요소가 없어짐.

// 3-4. push()* : 값을 추가
cars.push('Volkswager');
cars.push('Hyundai');
console.log(cars);

// 3-5. reverse()*  : 배열을 거꾸로
cars.reverse();
console.log(cars);

// 3-6. sort()* : 객체의 경우 순서를 어떤 것을 기준으로 해야할지 정해주어야 함.
let numbers = [34, 56, 12, 20, 64, 46, 72];
numbers.sort(); // 오름차순 (Ascending order)
console.log(numbers);
numbers.sort(function (a, b) {   // 내림차순 (Decending order)
    return b - a;
});
console.log(numbers);

cars.sort();            // 오름 차순
console.log(cars);
cars.sort(function (a, b) {        // 내림 차순 
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
})
console.log(cars);

// 3-6-1. 배열 내 객체를 정렬할 때
let person = [
    { name: 'james', age: 30, job: 'programer' },
    { name: 'maria', age: 24, job: 'student' },
    { name: 'brian', age: 27, job: 'teacher' }
];
// 3-6-1-1. 이름의 알파벳 오름차순으로 정렬
person.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
})
console.log(person);
// 3-6-1-2. 나이의 내림차순으로 정렬
person.sort((a, b) => b.age - a.age);
console.log(person);

// 3.7 slice()
console.log(fruits.slice(0, 2));
console.log(fruits);


// 4. 응용
// 4-1. 문자열 뒤집기
let str = 'Hello, Javascript';
console.log(str.split('').reverse().join('')); // 한글자씩 잘라서 배열로 한 뒤 거꾸로하고 다시 합침
console.log(str);

// 4-2. 어떤 문자열이 회문(palindrome)인가? (그대로와 거꾸로가 같은 말)
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));