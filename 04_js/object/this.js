const user = {
  name: "조성희",
  sayHello() {
    console.log(`안녕하세요. ${this.name} 님`);
  },
};

user.sayHello();

// 예제
let boy = {
  name: "Mike",
  sayHello,
};
let girl = {
  name: "Jane",
  sayHello,
};
function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}
boy.sayHello();
girl.sayHello();
sayHello(); // undefined
