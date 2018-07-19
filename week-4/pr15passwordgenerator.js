// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// -use function changeVocals: huruf vokal yang diganti menjadi huruf setelahnya (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
// -use function reverseWord: kata dibalik;
// -use function setLowerUpperCase: huruf besar --> menjadi kecil, dan sebaliknya;
// -use function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
// diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  var answer1 = ''
  var alphabet = 'abefijopuvABEFIJOPUV'
  for (var i = 0; i< str.length; i++){
    if ( str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O'  ){
      for (var j = 0; j < alphabet.length; j++){ // cari nilai dalam var alphabet
        if (alphabet[j] === str[i]){
          answer1 += alphabet[j+1];
        }
      }
    } else {
      answer1 += str[i];
    }
  }
  // console.log(answer1);
  return answer1;
}

function reverseWord(str) {
  var answer2 = '';
  for (var i = str.length - 1; i >=0; i--){
    answer2 += str[i];
  }
  // console.log (answer2);
  return answer2;
}

function setLowerUpperCase (str) {
  var answer3 = '';
  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i].toLowerCase()){
      answer3 += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()){
      answer3 += str[i].toLowerCase();
    }
  }
  // console.log (answer3);
  return answer3;
}

function removeSpaces (str) {
  var answer4 = '';
  for (var i = 0; i<str.length; i++){
    if (str[i] !== ' '){
      answer4 += str[i];
    }
  }
  return answer4;
}

function passwordGenerator (name) {
  var jawaban1 = changeVocals(name);
  var jawaban2 = reverseWord(jawaban1);
  var jawaban3 = setLowerUpperCase(jawaban2);
  var jawaban4 = removeSpaces(jawaban3);
  if (jawaban4.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  return jawaban4;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
