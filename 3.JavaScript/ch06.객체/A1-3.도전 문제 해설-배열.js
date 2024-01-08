function diffSum(arr) {
    let sum = 0;
    let sumOfSquare = 0;
    for (let element of arr) {
        sum += element;
        sumOfSquare += element * element;
    }
    return sum * sum - sumOfSquare;
}

let sample = [24, 67, 45, 97, 43];

console.log(diffSum(sample));