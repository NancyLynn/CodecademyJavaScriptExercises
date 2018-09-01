var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`

//Change to ES5 syntax
var carbonara = 'You can make carbonara with ' + pasta + ', ' + meat ' , ' + 'and a sauce made with ' + sauce +'.';


//USED THE TERMINAL TO INSTALL TWO BABLE PACKAGES
//SET UP A JS PROJECT THAT TRANSPILED CODE UPON RUNNING npm run build
// INSTALLED NODE AND PACKAGE.JSON
//PASSED JavaScript ES6 CODE TO BABEL, WHICH TRANSPILED IT TO ES5 AND WROTE IT TO A FILE IN THE LIB DIRECTORY
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
