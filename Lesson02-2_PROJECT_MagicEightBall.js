let userName='Laina';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion='Should I go out today?';
const randomNumber = Math.floor(Math.random()*8);
let eightBallAnswer= '';

switch (randomNumber) {
  case 0:
    eightBallAnswer='It is certain.';
    break;
  case 1:
     eightBallAnswer="Fo' schizzle.";
    break;
    case 2:
       eightBallAnswer='Dunno.';
    break;
  case 3:
      eightBallAnswer="If so, how would you feel.";
    break;
  case 4:
       eightBallAnswer="What do you think?";
    break;
  case 5:
       eightBallAnswer='Um, no.';
    break;
  case 6:
       eightBallAnswer='Try not to get your hopes up.';
    break;
  case 7:
       eightBallAnswer='It seems likely.';
    break;
                    }

console.log(`${userName}, your question is: ${userQuestion}`);
console.log(`Answer: ${eightBallAnswer}`);
