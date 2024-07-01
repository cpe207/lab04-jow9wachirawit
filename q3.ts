function primeNumber(a:number) {
  /* Your code here */
  for(let i = 2;i<=a;i++){
    if(a%i == 0 && i != a){
      return "NO";
    }else{
      return "Yes";
    }
  }
  
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//รหัส นศ.: 660612156

//ชื่อ-สกุล : วชิรวิทย์ ไชยมาตย์