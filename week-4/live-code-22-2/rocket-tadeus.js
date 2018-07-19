/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

// loop, if first four index there is 'ikan' --> push to answer array; display answer array

function fishFilter(fishes) {
  var currentelement = '';
  var answer = [];
  for (var i = 0; i < fishes.length; i++){
    currentelement = fishes[i];
    for (var j = 0; j < currentelement.length; j++){
      if (currentelement[j]==='i' && currentelement[j+1]==='k' && currentelement[j+2]==='a' && currentelement [j+3] === 'n'){
        answer.push(currentelement);
      }
    }
  }
  var answer3 = answer.join('');
  if (answer3 === ''){
    return '';
  }
  var answer2 ='';
  var count = 0;
  for (var k = 0; k < answer.length -1 ; k++){
    answer2 = answer2 +answer[k] + ', ';
    count = count +1;
  }
  answer2 = answer2 + 'dan ' + answer[count];
  return answer2;
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol' , 'ikan today'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data



//punyanya Julian Christian Anderson
// function fishFilter(students) {
//   let result = [];
//   let counter = 0;
//   let print = '';
//   let counterPrint = 0;
//
//   for(let i = 0; i<students.length;i++){
//     if(students[i][0]+students[i][1]+students[i][2]+students[i][3]==='ikan'){
//       result.push(students[i]);
//       counter++;
//     }
//   }
//
//   while(counterPrint<result.length){
//     if(counterPrint!==result.length-1){
//       print+= `${result[counterPrint]},`;
//     } if(counterPrint===result.length-1){
//       print+= `dan ${result[counterPrint]}`;
//     }
//     counterPrint++;
//   }
//
//   if(counter===0){
//     return "tidak ada data";
//   } if(counter>0){
//     return print;
//   }
// }
