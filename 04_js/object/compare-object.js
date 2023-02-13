// const Hee = {
//   name: "조성희",
//   age: 24,
// };

// const 조성희 = {
//   name: "조성희",
//   age: 24,
// };

// console.log(Hee === 조성희); //false
//

const Hee = {
  name: "조성희",
  age: 24,
};

const HeeCopy = Hee;
HeeCopy.name = "Hee";
console.log(Hee); // name : 조성희 -> Hee로 변경
console.log(HeeCopy);
console.log(Hee === HeeCopy); // 메모리 주소가 동일하기 때문에 true
