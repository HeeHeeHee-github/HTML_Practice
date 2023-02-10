// 삼각형의 넓이
function t(num1, h) {
  return (num1 * h) / 2;
}
console.log(t(2, 4));

let triangleArea = (num1, num2) => {
  return (num1 * num2) / 2;
};

// 원의 넓이
function c(num2) {
  return num2 ** 2 * 3.14;
}
console.log(c(3));

// 피타고라스
function p(num3, h2) {
  return Math.sqrt(num3 ** 2 + h2 ** 2);
}
console.log(p(3, 4));
