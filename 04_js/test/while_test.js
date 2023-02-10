let i = 2;
let j = 1;
while (i <= 9) {
  console.log(`${i}단`);
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  j = 1;
  i++;
}
