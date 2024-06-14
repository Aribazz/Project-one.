/*var Name = prompt("what is your name!:");
alert(Name + " ...You Welcome to the best website... ");
let firstName = "Aribass"
console.log(firstName);

let myFirstJob = "Adviser";
let myCurrentJob = "Programmer";

console.log(myFirstJob);
console.log(myFirstJob);
console.log(Name);
//it is for the description of data...
let country = 2000000;
let continent = 1000000;
let population = 50000;

console.log(country);
console.log(typeof 23);
console.log(typeof myCurrentJob);
let numberCount = prompt("Enter your phone number: ");
console.log(numberCount);


//Assignment for pratices
let isIsland = true;
console.log(typeof isIsland);
let language;
console.log(typeof language);
console.log(population);


//mathematicall operators
const current = 2022
const ageAri = current - 1996;
const ageJohn = current - 1998;
console.log(ageAri, ageJohn);


//assignment operators
let x = 10 + 3;
x = 12;
x--; //x=x-1
x += 10;
x++;
console.log(x);

//comaprison assignment
console.log(ageAri > ageJohn);
console.log(ageAri >= 18);

let number = 1;
console.log(number);

console.log(++number++);
console.log(++number);


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


const myName = "Ariyo";
const job = "programmer";
const birthYear = 1996;
*/

/*
const detail = "I am " + myName + " a " + job + " by profession" + " born";
console.log(detail);


const detailOne = `I am ${myName} a ${job} by profession ${birthYear}`
console.log(detailOne);

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(`Mark's ${BMIMark} is much more older ${markHigherBMI}
`);//template literal


//if and else statment condition..
const age = 17;
const isOldEnough = age >= 18;
if (age >= 18) {
    console.log(`you old enough to apply for your licences..`)

} else {
    const yearsLEft = 18 - age;
    console.log(`you cant apply now wait for another ${yearsLEft} years..}`)

}




//bm1 = mass / height ** 2; for the formulae purpose..
//const markHigherBMI =
    //console.log(mark, john);


const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 34;
    console.log(`you can be one of the selected multitude..${century}`);
}


//type conversion.. to number
const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear));
//type conversion.. to string
const outputResult = 23;
console.log(outputResult);
console.log(String(outputResult));

//conversion
let n = "1" + 1;
n = n + 1;
console.log(n);


//falsy and truthly values
console.log(Boolean(0));
console.log(Boolean("string"));
console.log(Boolean(""));
console.log(Boolean({}));


//if_else statement of Boolean working with falsy& truthly..
const money = 2;
if (money) {
    console.log("you should safe properly..");
} else {
    console.log("you need a job");
}


//calculation for a cake..
const cake = 1;
const cakeIntoThreePieces = cake / 3;
const cakeMutiply = cakeIntoThreePieces * 3;
console.log(cakeMutiply);
console.log(cakeIntoThreePieces);
if (cake <= 3) {
    console.log("you will definitly have 0.333");
} else {
    console.log(" your cake is not dividend in other.");
}

const details = (prompt("What is your name:"));
if (details <= 23) {
    console.log("you are one of the right required age..")
} else {
    console.log("you should avoid applying because you not qualified.")
}
console.log(details);

/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

if (hasDriverLicense && hasGoodVision) {
    console.log("sarah can driver");
} else {
    console.log("you need to hire a driver helper.");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);
*/
/*  //THIS IS FOR THE CHALLENGES..
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//SOLUTION TO THE ABOVE CHALLENGE...
const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphin, scoreKoalas);
if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log("Dolphin won the trophy 😉..");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log("Koalas won the trophy 😉..");
} else if (scoreDolphin === scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100) {
    console.log("There is a tie..");
} else {
    console.log("There is no winner of the trophy..")
}


//the above solution using if_else statement..
const day = "tuesday"
if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code example");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}

// SWITCH STATEMENT USE...
const days = "mondayz";
switch (days) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code example");
        break;
    case "friday":
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
    default:
        console.log("Not a valid day");
}

const age = 15;
age >= 18 ? console.log("I will like to drink wine") :
    console.log("I will like to water alone.");

//CONDITIONAL OPERATOR DECLARATION VARAIBLE..
const age = 15;
const drink = age >= 18 ? "wine" : "water alone";
console.log(drink);


let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water alone"}`);


const bill = 273;
const tip = bill >= 50 && bill <= 300;
if (tip === bill) {
    console.log("He tip its usual value of 15%")
} else (
    console.log("here is the different tip value 20%")
)
console.log(tip);


//TERNARY OPERATORS...
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${(Math.floor(tip))}, and the total value ${bill + tip}`);


function fruitProcesser(apples, oranges) {
    console.log(apples, oranges);
    const juice = `I have ${apples} apples with ${oranges} oranges`;
    return juice;
}

console.log(fruitProcesser(5, 1));
//NORMAL FUNCTION..
function calAge1(birthYear) {
    const age1 = 2037 - birthYear;
    return age1;
}

calAge1(1997);
console.log(calAge1(1997));

//EXPRESSION FUNCTION..
const calAge2 = function calAge2(birthYear) {
    return 2037 - birthYear;

}
console.log(calAge2(1991));
console.log(calAge1(1997), calAge2(1991));

//ARROW FUNCTIONS..
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);
console.log(calcAge3(1996));


//USING VARIABLE IN AN ARROW FUNCTION..
const yearsUntilRetirement = (birthYear, firstName1) => {
    const ageOne = 2037 - birthYear;
    const retirement = 60 - ageOne;
    // return retirement;
    return `I ${firstName1} am going to retire in the next ${retirement} `
}
console.log(yearsUntilRetirement(1992, "Ariyo"));
console.log(yearsUntilRetirement(1994, "Johnson"));


//USING MULTIPLE FUNCTION WITHIN ANOTHER FUNCTION...
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    const appleFriut = cutFruitPieces(apple);
    const appleOrange = cutFruitPieces(orange);
    const juice = `Juice with ${appleFriut} pieces of apple and ${appleOrange} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calAge = function (birthYear) {
    const calAgeSub = 2037 - birthYear;
    return calAgeSub;
}

const yearsUntilRetirement = function (birthYear, firstName1) {
    const ageOne = calAge(birthYear);
    const retirement = 60 - ageOne;
    // return retirement;
    return `I ${firstName1} am going to retire in the next ${retirement} `
}
console.log(yearsUntilRetirement(1992, "Ariyo"));

//EXAMPLE
const calAverage = (a, b, c) => (a + b + c) / 3;

const dolphinAverage = calAverage(44, 23, 71);
const koalasAverage = calAverage(65, 54, 49);
console.log(calAverage(3, 4, 5));

console.log(dolphinAverage, koalasAverage);

const checkWinner = function (avgDolpins, avgKoalas) {
    if (avgDolpins >= 2 * avgKoalas) {
        console.log(`Dolphin wons... with ${avgDolpins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolpins) {
        console.log(`Koalas won..with ${avgKoalas} vs. ${avgDolpins} `);
    } else {
        console.log("No one won..");
    }
}
const winnerTotal = checkWinner(576, 222);
console.log(winnerTotal);
console.log(checkWinner(576, 111));


//15% = 15/100 =0.15
//20% = 20/100=0.2
const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinAverage, koalasAverage);

const checkWinner = function (avgDolpins, avgKoalas) {
    if (avgDolpins >= 2 * avgKoalas) {
        console.log(`Dolphin won.. with ${avgDolpins} vs. ${avgKoalas}..`);
    } else if (avgKoalas >= 2 * avgDolpins) {
        console.log(`Koalas won.. with ${avgKoalas} vs. ${avgDolpins}..`);
    } else {
        console.log("No one win the Tournament..");
    }
}
checkWinner(573, 121);
//TEST DATA 2...
dolphinAverage = calcAverage(65, 54, 49);
koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinAverage, koalasAverage);
checkWinner(121, 574);



const jonas = {
    firstName: "Ariyo",
    lastName: "Sunday",
    age: 2037 - 1992,
    job: "Teacher",
    friends: ["kayode", "adra", "bolu"]
};

console.log(jonas.friends[0]);
console.log(jonas);
console.log(jonas.lastName, jonas.age, jonas.friends);

const trustPPle = prompt("what is the name of the people you know that love you and care for you?");
console.log(trustPPle);


const jonas = {
    birthYear: 1992,
    firstName: "ari",
    lastName: "John",
    hasDrivenLicence: true,
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
};

console.log(jonas.calcAge());

//const calcAge = function (birthYear) { }
//function calAge(birthYear) { }
//COMBINATION OF OBJECT WITH VARIOUS OTHER PROPERTIES:
const jonas = {
    birthYear: 1992,
    firstName: "Ari",
    lastName: "John",
    hasDrivenLicence: false,
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${jonas.firstName} is a ${jonas.calcAge()} is year old ${this.lastName}, and has a ${jonas.hasDrivenLicence ? 'yes' : 'no'} driver's licence. `

    }
}

console.log(jonas.calcAge());
console.log(jonas.getSummary());

//EXERCISE TO DO ON CHALLENGES
const markMille = {
    markMass: 78,
    markHeight: 1.69,
    calcBMI1: function () {
        return BMIMark = this.markMass / this.markHeight ** 2;
    }
};
const johnSmith = {
    johnMass: 92,
    johnHeight: 1.95,
    calcBMI2: function () {
        this.BMIJohn = this.johnMass / this.johnHeight ** 2;
        return this.BMIJohn;
    }
}
console.log(johnSmith.calcBMI2());
console.log(markMille.calcBMI1());


//For loop keeps runnings while the condition is TRUE
for (let rep = 1; rep <= 10; rep = rep + 1) {
    console.log("lifted wights repitions 1");
}

// INTRODUCING THE FOR LOOP
const jonas = [
    'john',
    'steven',
    2037 - 1996,
    'teacher',
    ['monday', 'tuesday', 'wednesday']
];
const types = [];
for (let i = 0; i < 5; i = i + 1) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    //filling types array
    types[i] = jonas[i];

}
console.log(types);

//ANOTHER EXAMPLE OF ARRAY IN COMBINING DIFFERENT VARIBALE IN IT..
const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
    // age[i] = 2037 - years[i];
    age.push(2037 - years[i]);
}
console.log(age);

//continue and break statement
const year = [
    'john',
    'steven',
    2037 - 1996,
    'teacher',
    ['monday', 'tuesday', 'wednesday']
];
for (let i = 0; i < year.length; i++) {
    if (typeof year[i] !== 'string') break;
    console.log(year[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }
}

for (let job = 1; job < 4; job++) {
    console.log(`---this is my job${job}`)
}
let exercise = 1;
while (exercise < 10) {
    console.log(`-----starting exercise ${exercise}`);
    exercise++;
}
//while loop: Example of checking rolling dice..
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end...');
}

//Coding challenges #4
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
for (let i = 0; i < bill.length; i++) {
    const tip = calcTips(bill[i]);
    tips[i] = tip
    console.log(tips);
    tips.push(tip);
    totals.push(tip + bill[i]);

}
console.log(bill, tips, totals);
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

}
calcAverage([6, 7, 8]);


//declaring a variable
const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.88;
const johnMass = 95;
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnHeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
const higherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} else {
    console.log(`we have a tie`);
}


//PRATICE REVISION
function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `i have ${apple} with just ${orange} in the basket...`;
    return juice;

}
console.log(fruitProcessor(10, 5));
const appleFriutProcessor = fruitProcessor(2, 6);
console.log(appleFriutProcessor);

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
calcAge(1991);
console.log(calcAge(1991));
const reAge = calcAge(1994);
console.log(reAge);

const calAge = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calAge(1997);
console.log(age1);

const yearUnitRetirement = (birthYear, firstName) => {
    console.log
    const age = 2037 - birthYear;
    const retirement = 64 - age;
    return `i am ${birthYear} years old and my name is ${firstName}which the retirement is ${retirement}.`;
}
console.log(yearUnitRetirement(2012, "Ariyo"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apple, orange) {
    const appleFriut = cutFruitPieces(apple);
    const orangeFruit = cutFruitPieces(orange);
    const juice = `Juice with ${appleFriut} and ${orangeFruit}`;
    return juice;
}
fruitProcessor(4, 6);
console.log(fruitProcessor(4, 6));

const friend = ['monday', 'tuesday', 'wednesday', ['thursday']];
console.log(friend);
friend[0] = 'Number one';
console.log(friend);



const jonas = {
  firstName: "Ariyo",
  lastName: "Johnson",
  age: 2037 - 1991,
  job: "teacher",
  birthYear: 1996,
  mature: 2012,
  calcAge: function (mature) {
    return 2037 - this.mature;
  },
};
const interestedIn = prompt("What is your age?");
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong Request");
}
jonas.locationn = "portaguel";
jonas["@twitter"] = "Aribazz";
console.log(jonas.calcAge()); // for the Dot
console.log(jonas["calcAge"]());

"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "tempt",
    unit: "celsius",
    value: Number(prompt("Degree Celsius")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());





const jonas = {
  firstName: "Ariyo",
  lastName: "Johnson",
  age: 2037 - 1991,
  job: "teacher",
  birthYear: 1996,
  mature: 2012,
  calcAge: function (birthYear) {
    return 2037 - this.birthYear;
  },
};
const interestedIn = prompt("What is your age?");
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong Request");
}
jonas.locationn = "portaguel";
jonas["@twitter"] = "Aribazz";
console.log(jonas.calcAge()); // for the Dot
console.log(jonas["calcAge"]());


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`${data1[0]}... ${data1[1]}... ${data1[2]}...`);

const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} in ${i + 1}days...`;
  }
  console.log("..." + str);
};
printForcast(data2);
*/

for (let exercise = 0; exercise < 6; exercise++) {
  console.log(`THE VARIETIES OF EVENT: ${exercise}`);
  for (let rep = 0; rep < 10; rep++) {
    console.log(
      `This will contain all the various above Exercise of the event..${rep}`
    );
    if (exercise === 2) {
      console.log(`This loops End here...`);
    }
  }
}
