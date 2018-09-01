//LOOPS
let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}


//FOR LOOPS

//looping forward
let vacationSpots = ['Bali', 'Seattle', 'Spain'];
for (let vacationSpotIndex = 0;
     vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//looping backwards
let vacationSpots = ['Bali', 'Seattle', 'Spain'];
for (let vacationSpotIndex = vacationSpots.length-1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


//NESTED LOOPS
let myPlaces = ['Spain', 'Jamaica', 'Red River Gorge'];
let friendPlaces = ['New River Gorge', 'Red River Gorge', 'Spain'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {

  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log("We're going here: " + myPlaces[myPlacesIndex]);
    }
  }
}


//WHILE LOOPS
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = ('any');

while(currentCard !== 'Spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('found a spade');


//INFINITE LOOPS
//These are BAD, add a counter to stop them
//Otherwise they will likely crash the browser
et flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}
