let raceNumber = Math.floor(Math.random()*1000);
let earlyReg = true;
let age = 47;

if (!earlyReg) {
  raceNumber+=1000;
}

if (age>=18 && earlyReg) {
  console.log(`Racer ${raceNumber}, your race will begin at 9:30 am.`);
} else if (age>=18 || earlyReg) {
   console.log(`Racer ${raceNumber}, your race will begin at 11:00 am.`);
 } else if (age<18 && !earlyReg){
   console.log(`Racer ${raceNumber}, your race will begin at 12:30 pm.`);
 } else {
   console.log('Please go to the registration desk.');
 }
  
