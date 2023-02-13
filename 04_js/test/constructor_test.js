function KDT(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function () {
    console.log(`성함은 ${this.name}, 성별은 ${this.gender}입니다.`);
  };
}

let user1 = new KDT("조성희", "여성");
let user2 = new KDT("양재연", "남성");
let user3 = new KDT("김계환", "남성");
let user4 = new KDT("김범석", "남성");
let user5 = new KDT("김정혁", "남성");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();
user5.sayHello();
