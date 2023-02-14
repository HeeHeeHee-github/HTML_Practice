const Curriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];

const result1 = Curriculum[0].split("").reverse().join("");
const result2 = Curriculum[4].split("").reverse().join("");
console.log(result1);
console.log(result2);

const result3 = Curriculum.shift().split("").reverse().join("");
const result4 = Curriculum.pop().split("").reverse().join("");
console.log(result3);
console.log(result4);
