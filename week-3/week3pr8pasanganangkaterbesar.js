// Logic Challenge - Pasangan Angka Terbesar
// Problem
// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
// Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
// Contoh, jika angka adalah 183928, maka function akan me-return 92,
// pasangan dua digit angka yang paling besar diantara yang lainnya.
// Code
function pasanganTerbesar(num) {
  // you can only write your code here!
  var a = num.toString();
  var c = a.slice(0,2);
  var d = 0;
  for (var i = 0; i < a.length - 1 ; i++){
    var b = a.slice(i,i+2);
    if ( b >= c){
      c = b;
    }
  }
  d = Number(c); //compare this to the toString() syntax!!
  return d;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


//  var nam1= nama.slice(0,15);
