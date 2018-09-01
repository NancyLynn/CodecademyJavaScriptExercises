const kelvin = 293;
//degrees celsius = degrees K - 273
const celsius = kelvin - 273;
//convert C to F
let fahr = celsius * (9/5) + 32;
//round the F temp
fahr = Math.floor(fahr);
//calculate the conversion from K to F
console.log(`The temperature is ${fahr} degrees fahrenheit.`);
