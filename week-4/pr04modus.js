// Logic Challenge - Mencari Modus
// Problem
// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
// Function akan me-return modus dari array atau deret angka tersebut.
// Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
// Contoh, modus dari [10, 4, 5, 2, 4] adalah 4.
// Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).
// Jika modus tidak ditemukan, function akan me-return -1.
// Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
// Code
// function cariModus(arr) {
//   arr.sort((a,b) => a - b);
//   var biggestcount = countitemsinarray(arr,arr[0]);
//   var indexer = 0;
//   for (j = 0; j < arr.length - 1; j++) {
//     if (biggestcount < countitemsinarray(arr,arr[j])){
//       biggestcount = countitemsinarray(arr,arr[j]);
//       indexer = j;
//     }
//   }
//   if (biggestcount === 1 || biggestcount === arr.length){
//     indexer = -1;
//     return indexer;
//   }
//   return arr[indexer];
// }
//
// function countitemsinarray(arr1, num) {
//     var count = 0;
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] === num) {
//             count++;
//         }
//     }
//     return count;
// }

function cariModus(arr) {
  arr.sort((a,b) => a - b);
  var count = 0;
  var biggestcount = 1;
  var indexer = 0;
  for (var j = 0; j < arr.length; j++) { //the loop to check biggestcount < count;
    for(var i = 0; i < arr.length; i++){ //the loop to count how many elements are equal to the one pointed by indexer i;
      if (arr[i] === arr[j]) { //go through the loop to check if arr[i] is equal to the comparator, in this case arr[j];
        count++; // add count by one
      }
    }// end of the internal loop to count how many elements in the array is equal to the one pointed by indexer i;
    if (biggestcount < count){ // if statement to make biggestcount = count, which is when count is bigger than biggestcount;
      biggestcount = count;
      indexer = j; // we also need to move the indexer to the position of the new biggestcount, which happens to be j;
    }
    count = 0; //reseting the count to 0 so can have fresh strat in the next outerloop iteration;
  }// end of the external loop to compare biggestcount to count;
  if (biggestcount === 1 || biggestcount === arr.length){ // this last outside loop if is a conditional put by the task: if all content is the same (biggestcount === arr.length) or if there is no modus (biggestcount === 1) then return -1;
    indexer = -1;
    return indexer;
  }
  return arr[indexer]; // the wanted output is to know the value of the modus, not the indexer hence arr[ondexer]
}






// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// 2,4,4,5,10
// 5,5,6,10,10
// 1,2,3,5,10
// 1,2,3,3,4,5
// 7,7,7,7,7,7
