// Logic Challenge - Change Me!
// Problem
// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi
// dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
// First Name, Last Name, Gender dan Birth Year .
// Fungsi ini akan menampilkan object literal yang memiliki property
// firstName, lastName, gender dan age.
// Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
//  mJika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang
//  maka age akan berisi 'Invalid Birth Year'
//
// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:
//
// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
// Code
function changeMe(arr) {
   var avengers = {};
   for (var i = 0; i < arr.length; i++){
     avengers.firstname = arr[i][0];
     avengers.lastname = arr[i][1];
     avengers.gender = arr[i][2];
     avengers.age = (2018 - arr[i][3]);
     if (avengers.age < 0 || isNaN(avengers.age) === true){ // how to pinpoint  NaN
       avengers.age = 'Invalid Birth Year';
     }
     console.log (avengers.firstname + ' ' + avengers.lastname +': ');
     console.log(avengers);
   }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
