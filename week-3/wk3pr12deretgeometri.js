// Problem
// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka.
// Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri.
// Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian.
// Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3,
// dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian
// (27 * 3 bukanlah 48!).
// Code
function tentukanDeretGeometri(arr) {
  var toggle = true;
  for (var i = 0; i < arr.length - 2; i++) {
    var a = arr[i+1] / arr[i];
    var b = arr[i+2] / arr[i+1];
    if (a !== b){
      toggle = false;
    }
  }
  return toggle;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

//if (arr[i+1]/arr[i]) !== (arr[i+2]/arr[i+1]) --> false
//by end of sequence if there is no false, then true
