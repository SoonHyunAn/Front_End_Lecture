// 배열에 대한 함수 만들어보기
// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    return sum;
}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수
function maxArray(arr) {
    let numMax = arr[0];
    for (let num of arr) {
        if (numMax < num)
            numMax = num;
    }
    return numMax;
}

// 3. 배열에서 제곱의 합 구하기 
function sumOfSquare(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num * num;
    }
    return sum;
}


let sampleArray = [43, 17, 25, 36, 98, 73];
console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));

console.log(sumArray(sampleArray) / sampleArray.length);

console.log(sumOfSquare(sampleArray));
