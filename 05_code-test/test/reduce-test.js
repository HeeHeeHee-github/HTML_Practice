let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

const numbers_sum = numbers.reduce((acc, item) => (acc += item), 0);

console.log(numbers_sum);
