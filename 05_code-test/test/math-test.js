let nums = [-1.23, 13, 14.52, -33.53, 30];

// 가장 큰 수
console.log(Math.floor(Math.max(...nums)));
// 가장 작은 수
console.log(Math.floor(Math.min(...nums)));

// 절대값 평균
let nums_abs = [];
let result = 0;
for (let i = 0; i < nums.length; i++) {
  nums_abs.push(Math.abs(nums[i]));
  result += nums_abs[i];
}
console.log(result / nums.length);

// 0~100 까지의 숫자 중에서 랜덤한 정수
console.log(Math.floor(Math.random() * 100));
