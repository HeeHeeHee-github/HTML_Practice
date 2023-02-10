//2중 반복문
//구구단
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//0~100 숫자 중에서 2또는 5의 배수 총합 구하기
let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
