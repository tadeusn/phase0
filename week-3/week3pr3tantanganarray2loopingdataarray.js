// Melakukan Looping Data Array
// Sering kali data yang diterima dari database adalah array yang
// multidimensi (array di dalam array). Sebagai developer, tugas kita adalah
// mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.
//
// Objectives
// Mengenal Array Multidimensi
// Mengerti Cara Mengakses Nilai Array Multidimensi
// Directions
// Buatlah sebuah !!!fungsi dengan nama dataHandling!!!
// dengan sebuah parameter untuk menerima argumen.
// Argumen yang akan diterima adalah sebuah array
// yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:
//
// //contoh input
// var input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ]
// Tugas kamu adalah mengimplementasikan fungsi dataHandling
// agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
//
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca
//
// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar
//
// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak
//
// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

console.log('-----------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 3: TANTANGAN ARRAY 2: LOOPING DATA ARRAY');
console.log('-----------------------------------------------------------------');
console.log('');

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(isian){
  for (var i = 0 ; i < isian.length; i++){
    var horizontal = isian[i];
    console.log('Nomor ID     : '+ horizontal[1]);
    console.log('Nama Lengkap : '+ horizontal[2]);
    console.log('TTL          : '+ horizontal[3]+ ', '+ horizontal[4]);
    console.log('Hobi         : '+ horizontal[5]);
    console.log('')
  }
}

dataHandling(input);

console.log('');
console.log('-----------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 3: TANTANGAN ARRAY 2: SELESAI');
console.log('-----------------------------------------------------------------');


// !!!materi untuk multidimensional array!!!
/*
// cara deklarasi array 2 dimensi kosong
var arr2D = [[]];

// contoh array 2 dimensi
var arr2D = [ [1,2],
              [3,4],
              [5,6] ];
var murid = [ ['Budi', 'SD 1 Cicayur'], ['Suci', 'SD 23 Beji'] ];

// cara mengakses nilai didalam array 2 dimensi
console.log(arr2D[0]);    // [1,2]
console.log(arr2D[0][1]); // 2
console.log(murid[1]);    // ['Suci', 'SD 23 Beji']
console.log(murid[1][1]); // 'SD 23 Beji''

// array 2 dimensi dengan built-in functions
arr2D.push([7,8]);        // arr2D = [ [1,2], [3,4], [5,6], [7,8] ]
arr2D[1].push(0);         // arr2D = [ [1,2], [3,4,0], [5,6], [7,8] ]
arr2D[0].pop();           // arr2D = [ [1], [3,4,0], [5,6], [7,8] ]
arr2D[2].pop();           // arr2D = [ [1], [3,4,0], [5], [7,8] ]

//accessing data inside arrays with loop:
var cubes = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
ouput=
cube[0][0] = 1
cube[0][1] = 2
cube[0][2] = 3
cube[1][0] = 4
cube[1][1] = 5
cube[1][2] = 6
cube[2][0] = 7
cube[2][1] = 8
cube[2][2] = 9

row - column
apparently i cannot do looping : input[i][0]; only when input[i]
*/
