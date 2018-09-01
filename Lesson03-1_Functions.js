//INTRO TO FUNCTIONS
let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.



//FUNCTIONS, PARAMETERS, RETURN
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {

  return getSubTotal(itemCount)*0.06;
};

const getTotal = (itemCount) => {
  return getSubTotal (itemCount) + getTax(itemCount);
};

console.log('Sub-total: ' + getSubTotal(orderCount));
console.log('Tax: ' + getTax(orderCount));
console.log(getTotal(orderCount));


//FUNCTION DECLARATIONS
function isGreaterThan (num1,num2) {
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan (5,24));


//FUNCTION EXPRESSIONS
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(4, 8));


//ARROW FUNCTIONS
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
