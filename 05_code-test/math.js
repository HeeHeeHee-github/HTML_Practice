// 절대값
const num1 = -999;
console.log(Math.abs(num1));

// 최대, 최소값 구하기
console.log(Math.max(1, 2, 3, 4, 5, 6, -100, -99));
console.log(Math.min(1, 2, 3, 4, 5, 6, -100, -99));

const numArr = [1, 2, 3, 4, -5, -9, -100];
console.log(Math.min(numArr)); // NaN
console.log(Math.min(...numArr)); // -100 정상적으로 출력

// 출력값 비교
console.log(numArr);
console.log(...numArr); // 배열을 찢어서 저장
console.log(Math.min(numArr[0], numArr[1], numArr[2]));

// 소수점 관리
const num2 = 3.14;
console.log(Math.round(num2)); // 3 반올림
console.log(Math.floor(num2)); // 3 내림
console.log(Math.ceil(num2)); // 4 올림

// 랜덤
console.log(Math.random()); // 15번째 짜리까지의 소수를 랜덤으로 출력
