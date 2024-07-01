function primeNumber(a) {
    /* Your code here */
    for (var i = 2; i <= a; i++) {
        if (a % i == 0 && i != a) {
            return "NO";
        }
        else {
            return "Yes";
        }
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//รหัส นศ.: 660612156
//ชื่อ-สกุล : วชิรวิทย์ ไชยมาตย์
