const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, item, index) => {
  return (acc += item);
}, 0); // 0은 acc의 초기값

console.log(result); // 15
//만약 초기값이 10이면 25가 출력

const numbers2 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
// acc = [0, 0];
// 음수의 개수 , 양수의 개수
// 양수가 나오면 뒤에 0에 더하기

const resultReduce = numbers2.reduce(
  (acc, item) => {
    item < 0 ? (acc[0] += 1) : (acc[1] += 1);
    return acc;
  },
  [0, 0]
);
console.log(resultReduce);
