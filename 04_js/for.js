// //기본 반복문
// for (초기화식; 조건식; 증감식) {
//}

for (let index = 0; index < 10; index++) {
  console.log(`인사를 ${index + 1} 번째 드립니다! 🙏`);
}

//2중 반복문
for (let i = 0; i < 3; i++) {
  console.log(`상의 for문 입니다. ${i + 1}번째 작동 중`);
  for (let j = 0; j < 5; j++) {
    console.log(`하위 for문 입니다. j는 ${j}입니다.`);
  }
}
