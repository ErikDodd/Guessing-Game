'use strict'; // strict syntax

console.log('app is running');

let correctAnswers = 0;

let user = prompt('What is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name...');
  user = prompt('Please provide your name to continue...');
}
alert('Hello ' + user + '! Thank you for visiting my website. ');

let ageAnswer = 'Yes';
let ageAnswerCorrect = askQuestion('Am I 33 years old?', ageAnswer);

let showAnswer = 'No';
let showAnswerCorrect = askQuestion('Is my favorite TV Show The Sopranos?', showAnswer);

let facialHairAnswer = 'Yes';
let facialHairAnswerCorrect = askQuestion('Do I have a beard?', facialHairAnswer);

let teamAnswer = 'Yes';
let teamAnswerCorrect = askQuestion('Is Arsenal FC my favorite sports team?', teamAnswer);

let cityAnswer = 'No';
let cityAnswerCorrect = askQuestion('Is Paris my favorite city to travel to?', cityAnswer);

let numberOfAttempts = 4;
let myFavoriteNumber = 27;
let userNumberGuess = parseInt(prompt('What is my favorite number?'));
while (userNumberGuess !== myFavoriteNumber && numberOfAttempts > 1) {
  if (userNumberGuess < myFavoriteNumber) {
    alert('That guess is too low!');
  } else {
    alert('That guess is too high!');
  }
  numberOfAttempts -= 1;
  userNumberGuess = parseInt(prompt('What is my favorite number?'));
}
if (userNumberGuess === myFavoriteNumber) {
  alert("That's correct! Great work!");
  correctAnswers++;
} else {
  alert(
    'You ran out of attempts, sorry! The correct answer is ' +
      myFavoriteNumber +
      '!'
  );
}
let numberOfGuesses = 6;
let myFavoriteMusic = [
  'Outkast',
  'Frank Ocean',
  'The Weeknd',
  'Lil Wayne',
  'Young Thug',
  'Jay-Z',
  'Bob Marley',
];
let userMusicianGuess = prompt('What is one of my favorite Musicians?');
let isFavorite = false;
while (numberOfGuesses > 0) {
  // iterate myFavoriteMusic to see if userMusicianGuess is inside, if it is set is favorite to true
  for (let music of myFavoriteMusic) {
    console.log(music);
    if (userMusicianGuess.toLowerCase() === music.toLowerCase()) {
      isFavorite = true;
    }
  }
  if (isFavorite === false) {
    alert('That is wrong! Think Rap or R&B Music...');
  }
  if (isFavorite === true) {
    alert(
      'Correct! Great job! My Favorite Musicians are ' + myFavoriteMusic + '.'
    );
    correctAnswers++;
    break;
  }
  numberOfGuesses -= 1;
  if (numberOfGuesses === 0) {
    alert(
      'You ran out of attempts, sorry! The correct answer is one of the following: ' +
        myFavoriteMusic +
        '! You got a total of ' +
        correctAnswers +
        ' points.'
    );
  }
  userMusicianGuess = prompt('What is one of my favorite Musicians?');
}
alert(
  'You are done with the guessing game! You have answered ' +
    correctAnswers +
    ' questions correctly. Great job!'
);

function askQuestion(question, correctAnswer) {
  let answerCorrect = false;
  let userGuess = prompt(question);
  if (userGuess.toLowerCase() === 'yes' || userGuess.toLowerCase() === 'y')
    userGuess = 'Yes';
  if (userGuess.toLowerCase() === 'no' || userGuess.toLowerCase() === 'n')
    userGuess - 'No';
  if (userGuess === correctAnswer) {
    alert('Great guess! You got it right! 💥');
    correctAnswers++;
    answerCorrect = true;
  } else {
    alert('Unfortunately that is wrong. 😕');
  }
  return answerCorrect;
}
