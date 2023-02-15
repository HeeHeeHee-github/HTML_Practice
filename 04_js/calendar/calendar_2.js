// JS 구현
const calendar = document.querySelector("table"); // 전체 달력
const date = document.querySelector("#date"); // 선택한 날짜
const input = document.querySelector("#content"); // 입력한 스케줄

// 클릭 된 요소를 저장하기 위한 전역 변수
// 내가 클릭한 td의 위치
let targetEl;

function calendarTask(e) {
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}

function writeSchedule() {
  if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력해주세요.");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요.");
    return;
  }

  const divEl = document.createElement("div");
  divEl.textContent = input.value;

  // divEl.addEventListener("click", function () {
  //   divEl.remove();
  // });

  targetEl.append(divEl);
  input.value = "";
}

calendar.addEventListener("click", calendarTask);
