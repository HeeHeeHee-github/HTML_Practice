// 클래스가 orange인 DOM 요소를 선택해서 출력
let orangeClass = document.querySelector(".orange");
console.log(orangeClass);

//ID가 skyblue인 DOM 요소를 선택하여 출력
let skyBlueId = document.getElementById("skyblue");
console.log(skyBlueId);

//ul 리스트의 2번째 자식 li 요소를 선택한 다음, 해당 DOM 요소에 orange 클래스를 부여한 다음 출력
let listEl = document.querySelector("ul>li:nth-child(2)");
listEl.classList.add("orange");
console.log(listEl);

if (orangeClass.classList.contains("orange") === true) {
  orangeClass.classList.remove("orange");
}

console.log(orangeClass);
