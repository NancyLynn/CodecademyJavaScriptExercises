//CREATING ARRAYS
let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
console.log(bucketList);


//PROPERTY ACCESS, UPDATE ELEMENTS, .PUSH AND .POP
let newYearsResolutions = ['item one', 'item two', 'item three'];

newYearsResolutions.push('item four');
newYearsResolutions.pop();
console.log(newYearsResolutions);


//MORE ARRAY METHODS
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList.slice(1,4));
console.log(groceryList);


//ARRAYS WITH LET AND CONST
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Pickles');
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils.pop();
console.log(utensils);
utensils = ['spoon'];
