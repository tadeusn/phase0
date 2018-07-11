// Problem
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
// Function akan me-return array multidimensi dimana array tersebut berisikan
// kategori/kelompok array yang dikumpulkan sesuai dengan ABJAD depannya.
// Abjad harus berurut dari a-z (jika ada).
// Untuk kasus ini, anggap saja semua text lowercase.
//
// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
// Code

console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 15: LOGIC CHALLENGE: MENGELOMPOKKAN HEWAN');
console.log('-------------------------------------------------------------------');
console.log('');

function hurufpertama(arr1,count1){
  var huruf1 = arr1[count1][0];
  return huruf1;
}

function groupAnimals(animals) {
  // 2 process --> sort; for-loop:push to array row 1 sampai huruf depannya ganti: ganti row;
  // process 1: sort: using !!! numArray.sort((a, b) => a - b); !!! wait ... why didn't it work....normal sort instead...(is it just for numbers??)
  console.log('');
  animals.sort((a, b) => a.localeCompare(b)); // this seems to work for names!!!  items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}))
  // process 2: pushing to a new array
  // apparently you need to set up the empty multidimensional variable array correctly first; can't just be static var hasil = [[],[],[]];
  //console.log(animals);
  // before setting up the hasil array, need to determine how many rows; in this case number of rows = difference of first letter in animals array; this uses counter//
  var countrows = 0;
  var tempani = animals.slice();
  var pembanding =  hurufpertama(animals,0)
  for (var i = 0; i < animals.length; i++){
    if (hurufpertama(animals, i) !== pembanding){
       countrows = countrows+1;
       pembanding = hurufpertama(animals,i); //almost forgot to put this in, resulting in bigger than expected row counts;
    }
  }
  //console.log (countrows);
  // assigning the dynamic 2d array; a formula to create empty n-row(s) 2D array given we know how many rows;
  var hasil = [];
  for (var i = 0; i <= countrows; i++){ // because countrows counts was from 0 and not 1
    hasil[i] = [];
  }
  // var hasil =[[],[],[],[]]; this is static
  var arrayrow = 0;
  var pembanding =  hurufpertama(tempani,0)
  for (var i = 0; i < animals.length; i++){
    if (hurufpertama(animals, i) === pembanding ){
      hasil[arrayrow].push(animals[i]);
    }
    else if (hurufpertama(animals, i) !== pembanding){
       arrayrow = arrayrow + 1;  //go to the next array row;
       hasil[arrayrow].push(animals[i]);
       pembanding = hurufpertama(animals,i); // recalibrate the measuring first word;
    }
    else {
      console.log('error');
    }

  }//end for loop
  return hasil;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


console.log('');
console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 15: MENGELOMPOKKAN HEWAN: SELESAI. YAY! -TADEUS');
console.log('-------------------------------------------------------------------');
