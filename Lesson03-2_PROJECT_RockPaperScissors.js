const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  //change to lower case because someone might input caps
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }  else {
    console.log('Please input rock, paper or scissors.');
  }
  //check that a valid choice was typed by the user
}

const getComputerChoice = () => {
  const genNum = Math.floor(Math.random()*3);

  switch (genNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  //check for a tie
  if (userChoice === 'bomb') {
    return "You win, cheater!";
  }
      if (userChoice === computerChoice) {
    return "Tie game.";
  }

  //user selects rock
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You win!';
     } else {
       return "You lose.";
     }
  }

  //user selects paper
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!'
    } else {
      return "You lose.";
    }
  }

  //user selects scissors
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return "You lose.";
    }
  }
  // this is the end of the determine winner code
}

const playGame = () => {
  const userChoice = getUserChoice('scissorS');
  const computerChoice = getComputerChoice();
  console.log('The user chose ' + userChoice +'.');
  console.log('The computer chose ' + computerChoice + '.');
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
  
