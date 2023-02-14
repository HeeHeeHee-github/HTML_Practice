// --> Hello

// split
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-"); // - 을 기준으로 잘라준다. 자른 순서대로 배열에 넣어준다.
console.log(helloTestArr);
let helloTestArr2 = helloTest.split("");
console.log(helloTestArr2);
let helloTestArr3 = helloTest.split("l");
console.log(helloTestArr3);

// join
let helloStr = helloTestArr.join("-");
console.log(helloStr);
let helloStr2 = helloTestArr.join("");
console.log(helloStr2);

// reverse
let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

// - 기준으로 잘린 hello를 뒤집고 합치기
let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);
// 위를 한 줄로 표현
let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

// arr
const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr);

//number에게 reverse는 통하지 않기 때문에 에러가 뜨게 됨
let testStr2 = obj.number.reverse().join("");
console.log(testStr2);

// undefined도 안됨
let testStr3 = obj.str.reverse().join("");
console.log(testStr3);
// 다만 에러를 막을 순 있다. ? 를 넣어주면 에러를 막을 수는 있긴하다.
// 저기서 코드가 멈추게 됨
let testStr3_1 = obj.str?.reverse().join("");
console.log(testStr3_1);
