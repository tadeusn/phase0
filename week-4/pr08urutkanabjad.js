// Problem
// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
// Contohnya, halo akan menjadi ahlo.
// Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
// Code

function urutkanAbjad(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //!!!replacing tanda baca
  str = str.toLowerCase(); //!!!!making all lowercase .. apparently this is mubazir!!!!!!!! The toLowerCase() method does not change the original string.
  var arrstr = [];
  for (var i = 0; i < str.length;i++){
    arrstr.push(str[i]);
  }
  arrstr.sort((a, b) => a.localeCompare(b)); //!!!sorting alphabetical inside array
  str = arrstr.join(''); // join it to be a string... add the ('') if not ada tanda koma-nya;
  return str;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
