function isDivisible(year){
    let num = year % 100; // 빼기보다 좋은 방법
    if ((year+1) % num == 0)
        return 'Good';
    return 'Bad';
}

for (let year = 2023; year <=2040; year++)
{
    console.log(`${year}: ${isDivisible(year)}`);
}