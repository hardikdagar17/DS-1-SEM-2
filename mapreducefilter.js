const num = [1, 2, 3, 4, 5];

const num2 = num.map((x) => { return x * 2 });
console.log(num2);

const divisibleBy2 = num.filter((x) => { return x % 2 === 0 });
console.log(divisibleBy2);

const sum = num.reduce((acc, x) => { return acc + x }, 0);
console.log(sum);