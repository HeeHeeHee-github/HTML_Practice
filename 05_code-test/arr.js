const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map(function (item, index, origin) {
  console.log("item", item);
  console.log("index", index);
  console.log("origin", origin);
});

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(i);
}

const obj = fruits.map(function (item, index, origin) {
  return {
    id: index,
    name: item,
  };
});
console.log(obj);

const obj_arrow = fruits.map((item, index) => {
  return {
    id: index,
    name: item,
  };
});
console.log(obj_arrow);

const obj_arrow_min = fruits.map((item, index) => {
  return {
    id: index,
    name: item,
  };
});

const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map(function (item, index) {
  return item / 3;
  // 리턴값이 divideArr
});
console.log(divideArr);

// 화살표 함수
// 1단계
const numbers = [1, 2, 3, 4, 5, 6];
numbers.map(function (item) {
  return item * 2;
});
// 2단계
const numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.map((item) => {
  return item * 2;
});
// 3단계
const numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.map((item) => item * 2);
// + 만약 return 값이 객체라면 그냥 써야됨

// filter
// 1단계
// const number4 = [1, 2, 3, 4, 5, 6];
// const filterArr = number4.filter(function (item, index, origin) {
//   return item > 3;
// });
// console.log(filterArr);

// 2단계
// const number4 = [1, 2, 3, 4, 5, 6];
// const filterArr = number4.filter((item, index, origin) => {
//   return item > 3;
// });
// console.log(filterArr);

// 3단계
const number4 = [1, 2, 3, 4, 5, 6];
const filterArr = number4.filter((item, index, origin) => item > 3);
console.log(filterArr);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// filter 예시
const resultArr = words.filter(function (item) {
  return item.length >= 6;
});
console.log(resultArr);

// includes
const number5 = [1, 2, 3, 4, 5, 6];
console.log(number5.includes(3)); // 3이 있으니 true
console.log(number5.includes(7)); // 7이 없으니 false
