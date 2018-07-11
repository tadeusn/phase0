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

function groupAnimals(animals) {
  // 2 process --> sort; for-loop:push to array row 1 sampai huruf depannya ganti: ganti row;
  // process 1: sort: using !!! numArray.sort((a, b) => a - b); !!! wait ... why didn't it work....normal sort instead...(is it just for numbers??)
  animals.sort((a, b) => a.localeCompare(b)); // this seems to work for names!!!  items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}))
  // process 2: pushing to a new array
  var hasil =[];
  var tempani = animals.slice();
  var arrayrow = 0;
  var pembanding =  hurufpertama(tempani,0);
  for (var i = 0; i < animals.length; i++){
    if (hurufpertama(tempani,i) === pembanding){
      hasil[arrayrow].push(animals[i]);
      console.log('aha');
    } else if {
        arrayrow = arrayrow + 1;
    } else {
        console.log('uhu');
    }

  }
  return animals;
}

function hurufpertama(arr1,count1){
  var huruf1 = arr1[count1][0];
  return huruf1;
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
