// NOT 연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if (!isAdult) {
  console.log("돌아가");
} else {
  console.log("통과");
}

//다중 비교
//여성이고, 이름이 hee이거나 성인이면 통과
//맞지 않지만 통과가 출력됨

let gender = "Male";
let name = "John";
let isAdultJohn = true;

if ((gender === "Female" && name === "John") || isAdultJohn === true) {
  console.log("통과");
} else {
  console.log("돌아가");
}
