// JS 구현
const calendar = document.querySelector("table"); // 전체 달력
const date = document.querySelector("#date"); // 선택한 날짜
const input = document.querySelector("#content"); // 입력한 스케줄

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

// 특정 날짜를 선택했을때
calendar.addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName === "P" || tagName === "TD") {
    targetEl = e.target;
    date.value = `2023년 2월 ${targetEl.innerText}일`;
  }
});

// 작성 버튼을 클릭했을 때, 달력에 입력되게 하기
function writeSchedule() {
  const tagName = targetEl.tagName;
  const divEl = document.createElement("div");
  divEl.innerText = input.value;
  if (tagName === "P") {
    targetEl.parentNode.appendChild(divEl);
  } else if (tagName === "TD") {
    targetEl.appendChild(divEl);
  }

  input.value = "";
  divEl.addEventListener("click", function () {
    divEl.remove();
  });
}
