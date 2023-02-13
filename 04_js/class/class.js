// // 생성자 함수로 선언
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = () => {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
//   };
// }

// const hyundai = new Car("hyundai", "black");
// const porsche = new Car("porsche", "yellow");
// const toyota = new Car("toyota", "silver");

// console.log(hyundai.brand);
// porsche.drive();
// toyota.drive();

// 위에 있는 것을 클래스로
// class Car 선언
class Car {
  // 생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
  }
}

const hyundai = new Car("hyundai", "black");
const porsche = new Car("porsche", "yellow");
const toyota = new Car("toyota", "silver");

console.log(hyundai.brand);
porsche.drive();
toyota.drive();
