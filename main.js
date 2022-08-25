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
*/

const jonas = {
    firstName: "aroma",
    lastName: "John",
    hasDrivenLicense: true,
    days: ["mondays", "wednesday", "fridays"],

    getSummary: function () {
        return `${this.firstName} is the first name the last name is ${jonas.lastName}..e.t.c, is he have driven license${this.days}`
    }
};
console.log(jonas.getSummary());