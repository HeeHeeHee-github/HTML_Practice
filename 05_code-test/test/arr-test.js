let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// const sameArr = fruits1.filter(function (item) {
//   return fruits2.includes(item);
// });

const sameArr = fruits1.filter((item) => fruits2.includes(item));
console.log(sameArr);

const diffArr = fruits1.filter(function (item) {
  return !fruits2.includes(item);
});
console.log(diffArr);

// find
const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  // return item === "Apple";
  return /^A/.test(item); // 대문자 A가 있는 Apple 출력
});
console.log(findResult);

// findIndex
const findIndexResult = fruits3.findIndex((item) => item === "Banana");
console.log(findIndexResult);
