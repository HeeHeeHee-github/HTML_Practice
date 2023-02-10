const Hee = {
  성인인가: true,
  VIP: false,
  취했는가: true,
  돈: false,
};

// 성인이거나 VIP이면 통과,
// 성인이면서 VIP여도 취했으면 돌아가,
// 성인이 아니고 VIP도 아니면서 취했어도 돈을 줬으면 통과
// ==> 돈내면 무조건 통과

//이것보다 아래처럼 쓰는게 가독성이 더 좋음
// if (((Hee.성인인가 || Hee.VIP) && Hee.취했는가) || Hee.돈) {
//   console.log("통과");
// }
// else{
//   console.log("돌아가");
// }

if (Hee.돈 || (Hee.취했는가 && (Hee.성인인가 || Hee.VIP))) {
  console.log("통과");
} else {
  console.log("돌아가");
}
