function arrayStringify(a: number[]) {
  /* Your code here */
  let aws = "";
  for (let i = 0; i < a.length; i++) {
    aws = aws + a[i];
}
return aws;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

//รหัส นศ.: 660612156

//ชื่อ-สกุล : วชิรวิทย์ ไชยมาตย์