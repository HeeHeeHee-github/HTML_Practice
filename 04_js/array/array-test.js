let my_string = "aDsfs";
console.log(my_string.sort());
let answer = my_string.toLowerCase().split("").sort().reverse().join("");
console.log(answer);

function solution(my_string) {
  let answer = my_string.toLowerCase().sort();
  console.log(my_string);
  return answer;
}
