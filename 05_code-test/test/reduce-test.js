// let numbers = [1, 2, 3, 3, 3];

// const numbers_sum = numbers.reduce((acc, item) => (acc += item), 0);

// console.log(numbers_sum / numbers.length);

function solution(numbers) {
  let answer = numbers.reduce((acc, item) => {
    return (acc += item);
  }, 0);
  return answer / numbers.length;
}

console.log(solution([1, 2, 3]));
