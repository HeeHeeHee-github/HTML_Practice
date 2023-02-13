const pororo = {
  name: "뽀로로",
  height: 140,
  showName() {
    console.log(`뽀로로의 이름은 ${this.name}`);
  },
  showHeight,
};

function showHeight() {
  console.log(`뽀로로의 키는 ${this.height}`);
}

pororo.showName();
pororo.showHeight();
