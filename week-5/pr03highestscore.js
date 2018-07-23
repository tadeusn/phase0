// Logic Challenge: Highest Score
// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:
//
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
//
// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

// object within object
// output wanted
// {
//   foxes: { name: 'Dimitri', score: 90 },       // new object .class = input.class
//   wolves: { name: 'Alexei', score: 85 }
// }

// input = array of object where each object =
// {
//   name: 'Dimitri',
//   score: 90,
//   class: 'foxes'
// },


function highestScore (students) {
  // Code disini
  var answer1 = {};
  if (students.length<1) {
    return answer1;
  }
  for (var i = 0; i < students.length; i++){
    var kelas = students[i].class; // = foxes
    var indx = i;

    for (var j = 0; j < students.length; j++){ // looping to find the biggest
      var answer2 = {}; // var answer2 = 0; for some reason if i don't put it here, yg tertampil is the last answer2 ...... hmmm
      if (students[j].class === students[i].class){
        if (students[j].score > students[i].score){
          indx = j;
        }
      }
    }
    answer2.name = students[indx].name;
    answer2.score = students[indx].score;
    answer1[students[indx].class] = answer2; // { foxes: {name:, score:}}
    // answer.push(answer1);
  }
  return answer1;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
