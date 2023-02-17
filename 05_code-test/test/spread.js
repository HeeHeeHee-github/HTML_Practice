const fruits = ["사과", "바나나", "수박"];
console.log(fruits);
console.log(...fruits); // 전개 연산자
// 배열이 찢겨서 한 개씩 받아들여짐

function conLog(a, b, c) {
  console.log(a, b, c);
}

// 원래는 이렇게
conLog(fruits[0], fruits[1], fruits[2]);
// 전개 연산자로 간편하게
conLog(...fruits);

const fruits2 = ["사과", "바나나", "수박", "딸기", "망고", "멜론"];
// 매개 변수에 너무 많은 값이 들어올때 나머지 연산자를 사용하여 한꺼번에 처리
function conLog(a, b, ...c) {
  console.log(a, b, c);
}
conLog(...fruits2); // 사과 바나나 [ '수박', '딸기', '망고', '멜론' ]

// 문자열에는 map이란 함수 XXX
// 따라서 문자열을 배열로 만들어준다.
const str = "apple";
const strToArr = [...str];
console.log(strToArr);

const str2 = "apple";
const strToArr2 = str2.split("");
console.log(strToArr2);
