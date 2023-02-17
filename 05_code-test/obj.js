const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2);
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("resultObj", resultObj);

resultObj.a = 10;
console.log(obj1);

// 같은 메모리 주소값을 가지고 있는지 확인
console.log(obj1 === resultObj); // true

const heeObj = {
  name: "성희",
  age: "100",
  brain: null,
};

// const name = heeObj.name;
// 구조 분해 할당 방식으로 위, 아래 같은 의미
// name, age, brain 선언해서 값을 넣은 것과 같음
const { name } = heeObj;
// brain을 heeBrain으로 이름 변경도 가능
const { age, brain: heeBrain } = heeObj;
console.log(name, age, heeBrain);
