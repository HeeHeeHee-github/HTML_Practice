const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

let sum = 0;
// return을 쓰지 않으면 안됨
// const mapArr = numbers.map(function (item) {
//   sum += item;
// });
//console.log(mapArr);

// 1단계
// const mapArr2 = numbers.map(function (item) {
//   return (sum += item);
// });
// console.log(sum);

// 2단계
// const mapArr2 = numbers.map((item) => {
//   return (sum += item);
// });
// console.log(sum);

// 3단계
const mapArr2 = numbers.map((item) => (sum += item));
console.log(sum);

const str = "apple";
// 문자로 잘라서 들어옴
for (letter of str) {
  console.log(letter);
}

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
};
for (let item in obj) {
  console.log(item);
}
