// const heeName = "조성희";
// const heeAge = 24;
// const isMarried = false;
// 이렇게 하나씩 선언하는 것보다 아래 객체처럼 한 번에 선언하는 것이 훨씬 편하다.

const Hee = {
  name: "조성희",
  age: 24,
  isMarried: false,
};

//object - 접근, 추가, 삭제
// 접근
console.log("------ 접근 ------");
console.log(Hee);
console.log(Hee.name);
console.log(Hee["age"]); // 반드시 []안에 문자열 형태로 접근해야한다.

// 추가
console.log("------ gender 추가 ------");
Hee.gender = "F";
console.log(Hee);
console.log("------ hairColor 추가 ------");
Hee.hairColor = "black";
console.log(Hee);

// 삭제
console.log("------ hairColor 삭제 ------");
delete Hee.hairColor;
console.log(Hee);
console.log("------ age 삭제 ------");
delete Hee["age"];
console.log(Hee);
