// 배열에서 최소값, 최대값 구하기
let numbers = [3, 56, 43, 25, 68, 19];
// let Max=Math.max(numbers); 도 가능

// 직접 찾기
let maxVal = 0, minVal = 100;
for (num of numbers) {
    if (maxVal < num)
        maxVal = num;
    if (minVal > num)
        minVal = num;
}
console.log(maxVal);
console.log(minVal);

