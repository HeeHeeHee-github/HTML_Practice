function Students(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = function () {
    console.log(`성함은 ${this.name}입니다`);
  };
}

let user1 = new Students("조성희", "Female");
let user2 = new Students("김민지", "Female");
let user3 = new Students("이민수", "Male");
let user4 = new Students("박민철", "Male");
let user5 = new Students("김민정", "Female");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

user1.showName();
user2.showName();
user3.showName();
user4.showName();
user5.showName();

// 마치 객체를 만든 것 처럼 출력이 된다.
// 일일이 객체를 만들기 귀찮을때 좋음.
