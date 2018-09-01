//ITERATORS INTRO
let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


// . FOR EACH
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits

fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem);
});

fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));


// . MAP
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array
let secretMessage = animals.map(word => word[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array
let smallNumbers = bigNumbers.map(function(num){
  return num/100;
});

console.log(smallNumbers);


// . FILTER
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers
let smallNumbers = randomNumbers.filter(num => num<250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// Refactored the original code to use arrow function syntax


//ITERATOR DOCUMENTATION
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below - FIXED

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter( word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it - DONE

console.log(interestingWords.every(word =>  word.length > 5 ));


//CHOSING THE RIGHT ITERATORSlet cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
