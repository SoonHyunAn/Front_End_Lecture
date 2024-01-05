let H = Math.ceil(Math.random() * 24 - 1);
let M = Math.ceil(Math.random() * 60 - 1);

console.log(`${H} ${M}`);

if (M < 45) {
    M = 60 - 45 + M;
    H--;
}
else
    M -= 45;

if (H < 0)
    H = 23;

console.log(`${H} ${M}`);