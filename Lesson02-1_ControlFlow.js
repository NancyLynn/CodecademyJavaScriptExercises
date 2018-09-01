//CONTROL FLOW
let userName = 'Laina';
let knowsJavaScript;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}


//IF/ELSE STATEMENTS
let isSoccerFan = false;
if (isSoccerFan === true) {
  console.log("Goal!");
} else {
  console.log("No goal.");
}


//TRUE AND FALSE VALUES
let wordCount = 50;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'are';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let isRaining = false;
if (!isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}


//COMPARISON OPERATORS
let hungerLevel=7;
if (hungerLevel>7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later.')
}


//COMPARISON OPERATORS II
let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}


//ELSE IF STATEMENTS, LOGICAL OPERATORS, SWITCH STATEMENTS
let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}


//TERNARY OPERATORS
isLocked = true;
let isCorrect;
let favoritePhrase = "oh my";

isCorrect = true;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
