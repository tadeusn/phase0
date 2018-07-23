// !!Logic Challenge: Melee Ranged Grouping
// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
// implementasikan meleeRangedGrouping
//   agar hasilkan multidimensional array seperti yang diminta.
//
// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
//
// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
//
// Jika input adalah string kosong ('') maka return array kosong


// function meleeRangedGrouping (str) {
//   var answer = [];
//   var daftarnama = [];
//   var daftartype = [];
//   var melee = [];
//   var ranged = [];
//   if (str.length < 1) return [];
//   str = str.split('-').join(',').split(',');
//   console.log('str = '+str);
//   for (var i = 0; i < str.length; i+=2){
//     daftarnama.push(str[i]);
//     daftartype.push(str[i+1]);
//   }
//   console.log(daftartype[0]);
//   for (var j = 0; j < daftartype.length; j++){
//     if (daftartype[j] == 'Ranged'){
//       ranged.push(daftarnama[j]);
//     }
//     if (daftartype[j] == 'Melee'){
//       melee.push(daftarnama[j]);
//     }
//   }
//   answer.push(ranged);
//   answer.push(melee);
//   return answer;
// }

function meleeRangedGrouping (str) {

  // 
  if (str.length < 1){
    return [];
  }
  // change the string to one array
  var answer = [];
  str = str.split('-').join(',').split(','); //console.log(str);

  // how many types are there?; the type class are in the ganjil ones. // without having to require a sort function
  var arridxfordifftypes = [];
  var arrfordifftypes = [];
  arrfordifftypes.push(str[1]);
  for (let i = 1; i < str.length; i +=2){  //console.log('types = '+str[i]); // start from one to access type
    if (str[i] !== str[1]){
      arridxfordifftypes.push(i);
    }
  }
  if (arridxfordifftypes.length > 0){ //  if there are other classes add to the class; remember lengths
    var typecomparison = str[arridxfordifftypes[0]];
    arrfordifftypes.push(typecomparison);
    for (let i = 1; i<arridxfordifftypes.length; i++){ //start from one because comparisson... other option is length - 1;
      if (str[arridxfordifftypes[i]] !== typecomparison){
        typecomparison = str[i];
        arrfordifftypes.push(typecomparison);
      }
    }
  }
  console.log('arrfordifftypes= '+ arrfordifftypes);

  // now nyocokkan type dg


  return '';
}




/// next challenge: how bout if class is not just melee and ranged... but dynamic?
// can both names and type be both in one array, where n genap = nama, n ganjil = type?


// TEST CASE
console.log('1. '+meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// razor, ranged, invoker, ranged, meepo, melee, axe, melee, sniper, ranged
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log('2. '+ meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []



//To DELETE a keytype of an object ---> delete student.skills; deletes keytype skills of student object;
//student.sayhello = function(nama){ console.log('hello ' + nama);
//console.log(student.sayHello('adi'))

//console.log(Object.keys(student));
// student.name += ", yoki";
