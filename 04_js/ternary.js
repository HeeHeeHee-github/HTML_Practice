let name = "희희희";

//기본 if 문
if (name === "HEE") {
  console.log("맞았습니다.");
} else {
  console.log("틀렸습니다.");
}

//3항 연산자
// true 일 떼 물음표 뒤에 있는 것을 실행, false 이면 : 뒤에 있는 것을 실행
name === "HEE" ? console.log("맞았습니다.") : console.log("틀렸습니다.");

name === "HEE"
  ? console.log("맞았습니다.")
  : name === "희희희"
  ? console.log("희희희 맞습니다.")
  : console.log("아닙니다.");
