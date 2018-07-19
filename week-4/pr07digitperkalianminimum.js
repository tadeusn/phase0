// Problem
// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
// Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
//   Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
//   sehingga function akan me-return 2.
// Code

/* step one: figuring out the faktors & it's pasangan
there is a for loop from 1 to the number,
step two: input/i=otherfaktor  --> both need to be stored as an array; or combined as string; and counting it's index;
step three: count what is the minimum length;
step four: how many elements has that minimum length;
*/

/* apparently ndak perlu mbulet, karena yg ditanya adalah panjang digit perkaliannya saja, panjang length faktor terkecilnya;
step one sama
step two : no need to store to an array, cukup string, kemudian hitung indexnya
step three: get the smallest length and display ...
problemnya adalah = 1 % 1 = 0; jadi perlu ditambah kalau angka = 1 maka hasil = 2
*/

function digitPerkalianMinimum(angka) {
  // console.log ('');
  if (angka === 1) {  //this is because 1 % 1 = 0
    return 2;
  }
  var hasil = angka;
  for (var i = 1; i<= angka; i++){
    if (angka % i === 0){
      var otherfaktor = angka / i;
      var string1 = i.toString()+ otherfaktor.toString();
      //console.log (string1);
      if (string1.length < hasil){
        hasil = string1.length;
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
