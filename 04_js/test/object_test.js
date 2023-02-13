const pororo = {
  name: "뽀로로",
  age: 7,
  weight: 40,
  running: function () {
    console.log("뽀로로가 뜁니다!");
  },
  // running 함수를 줄여서 아래처럼 써도 됨
  // running() {
  //   console.log("뽀로로가 뜁니다!");
  // },
  cute() {
    console.log("뽀로로는 귀엽습니다!");
  },
};

console.log(pororo);
// 이름과 나이 출력
console.log(`이름: ${pororo.name}`);
console.log(`나이: ${pororo["age"]}`);

// 성별 추가
pororo.gender = "M";
console.log(`성별: ${pororo.gender} 추가`);
console.log(pororo);

// 키 추가
pororo.height = "150";
console.log(`키: ${pororo.height} 추가`);
console.log(pororo);

// 성별 삭제
delete pororo.gender;
console.log(pororo);

// pororo 객체에 name이 있는지 확인
console.log("name" in pororo);
console.log("height" in pororo);

// for ... in 반복문
//
for (let key in pororo) {
  console.log(`key는 ${key}, key 안에 값은 ${pororo[key]}`);
  console.log("key", key); // name, age, weight, height이 출력
  console.log("pororo[key]", pororo[key]); // 모든 key 값과 정보를 출력
}

// 함수 출력 방법 (따로 콘솔로그 쓰지 않아도 출력됨)
pororo.running();
pororo.cute();
