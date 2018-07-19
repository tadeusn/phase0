// problem: display x number of prime numbers.
// input = 2 ; output = [2,3]
// input = 5 ; output = [2,3,5,7,11]

function numberofprimenumbers(num){ //5
  var answer = [];
  answer.push(2);
  var angka = 3;
  for (var i = 0; i < num - 1; i++){ // -1 because first number already = 2
      var prima = true;
      for (var j = 2; j < angka; j++){
        if (angka % j === 0){
          prima = false;
        }
      }

      if (prima === true){
        answer.push(angka);
      }
      else {
        i = i - 1; // this is so that if it is not a prime number keep the counter to the way it was before!
      }
      angka += 1;
  }
  return 'Display the first '+num+' Prime Numbers: '+answer;
}


function thenthprimenumber(num){
  var answer = [];
  answer.push(2);
  var angka = 3;
  for (var i = 0; i < num - 1; i++){ // -1 because first number already = 2
      var prima = true;
      for (var j = 2; j < angka; j++){
        if (angka % j === 0){
          prima = false;
        }
      }

      if (prima === true){
        answer.push(angka);
      }
      else {
        i = i - 1; // this is so that if it is not a prime number keep the counter to the way it was before!
      }
      angka += 1;
  }
  return 'Display the '+num+'th Prime Number   : '+answer[num-1];
}

function KaprekarsConstant(num) { //arggghhhh
  var toggle = true;
  var count = 0;
  x = (''+num).split(''); // x array  !!!! making an array of numbers
  y = (''+num).split(''); // y array
  x.sort((a,b) => a - b); // x sort
  y.sort((a,b) => b - a); // y sort
  var x1 = Number(x.join('')); // x1 = number of x
  var y1 = Number(y.join('')); // y1 = number of y
  xminusyarr = [];
  while (toggle === true){

    var xminusy = Math.abs(x1 - y1); // xminusy = numberresult of x1 - y1
    xminusyarr = (''+xminusy).split('');  // xminusyarr = array of xminusy
    xminusyarr.sort((a,b) => a - b);
    var xminusy1 = Number (xminusyarr.join(''));
    console.log('x = '+x+', y = '+y+', x1 = ' +x1+ ', y1 = ' + y1+', xminusy = '+xminusy+', xminusyarr = '+xminusyarr+', xminusy1 = '+xminusy1);
    if (xminusy1 === x1){
        toggle = false;
    }
    else{
        count = count + 1;
        x = xminusyarr;
        y = xminusyarr.slice();
        y.sort((a,b) => b - a);
        x1 = Number(x.join(''));
        y1 = Number(y.join(''));

    }

  }
  return 'count = '+count;

}

// Tags: chess, combinatorics | Difficulty: Hard
// Challenge
// Using the JavaScript language, have the function ChessboardTraveling(str)
// read str which will be a string consisting of the location of a space on a standard 8x8 chess board
// with no pieces on the board along with another space on the chess board.
// The structure of str will be the following: "(x y)(a b)" where
// (x y) represents the position you are currently on with x and y ranging from 1 to 8 and
// (a b) represents some other space on the chess board with a and b also ranging from 1 to 8
//     where a > x and b > y.
// Your program should determine how many ways there are of traveling from (x y) on the board to (a b)
// moving only up and to the right.
// For example: if str is (1 1)(2 2) then your program should output 2
// because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2)
// while making only moves up and to the right.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:"(1 1)(3 3)"
//
// Output:6
//
//
// Input:"(2 2)(4 3)"
//
// Output:3
// function ChessboardTraveling(str) {
//
//   // code goes here
//   return str;
//
// }
//
// // keep this function call here
// ChessboardTraveling(readline());


console.log(numberofprimenumbers(10));
console.log(thenthprimenumber(1000));
console.log(KaprekarsConstant(2111)); //3
console.log(KaprekarsConstant(9831)); //7

var testing = ['a1', 't2', 'g3'];
testing = testing.sort((a,b) => a.localeCompare(b));
console.log(testing);
testing.reverse();
console.log(testing);
