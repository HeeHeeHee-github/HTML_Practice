let str = "124";
console.log(typeof str);
console.log(str / 2); //숫자로 알아서 인식하고 정상적인 값 출력

let num = Number(str);
console.log(typeof num);
console.log(num / 2);

console.log(Number("abcd"));
//NaN : 숫자가 아닌 !

let num1 = 123;
let num2 = 321;
let str1 = String(num1);
let str2 = String(num2);
console.log(str1 + str2); //string으로 형변환을 했기 때문에 123321로 출력

console.log(1, Boolean(1)); //true
console.log("Hee", Boolean("Hee")); //true
console.log(0, Boolean(0)); //false
console.log(-1, Boolean(-1)); //true
console.log("", Boolean("")); //false
console.log(" ", Boolean(" ")); //true
console.log(undefined, Boolean(undefined)); //false
console.log(null, Boolean(null)); //false
console.log(NaN, Boolean(NaN)); //false
