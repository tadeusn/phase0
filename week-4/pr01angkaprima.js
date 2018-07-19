// Problem
// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
// Function akan me-return true jika angka tersebut adalah bilangan prima.
// Jika tidak, return false.
// Code
function angkaPrima(angka) {
  var prima = true;
  for (var i = 2; i < angka; i++){
    if (angka % i === 0){
      prima = false;
    }
  }
  return prima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

//7/2 7/3 7/4 7/5 7/6
