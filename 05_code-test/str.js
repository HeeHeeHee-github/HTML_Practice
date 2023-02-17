// 문자열의 길이
const str = "Hello, World!";
//console.log(str.length); // 13
// 문자열의 길이 (for문 이용)
for (let i = 0; i < str.length; i++) {
  //console.log(str[i]);
}

// 특정 문자열 찾기
//console.log(str.indexOf("World")); // 7
//console.log(str.indexOf("World")); // -1
// -1 이 출력되는 이유는 못 찾았기 때문이다.
// 만약 str에 World가 두 번 입력되어 있다면, 그래도 7이 출력
// 가장 먼저 쓰이는 것 기준

// 문자열 자르기
console.log(str.slice(0, 6));
// World! 전까지 잘라주세요
console.log(str.slice(0, str.indexOf("World")));

// 문자열 바꾸기
console.log(str.replace("World", "뽀로로")); // World라는 문자를 뽀로로로 바꿔주세요.
// 원본이 바뀌는지 확인
console.log(str); // 바뀌지 않음. 자기가 바꾼 값만 리턴해주고 끝

// 문자열 반복하기
const str2 = "우영";
const longStr = str2.repeat(10) + "우"; // 10번 반복한 값을 출력한 뒤에 "우"를 추가
console.log(longStr);

// 문자열 앞 뒤 공백(문자) 제거하기
const str3 = "     Hello,        World      ";
console.log(str3.trim()); // 오로지 앞 뒤만 제거된다. 가운데는 제거되지 않음.
