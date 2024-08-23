// * Session 4 Outline

/*
TODO: Arrays (Basics, Index, Methods)
TODO: Loops (For, While, Do While, For Of)
*/

/*
? WoN/DQ - Starter task

! Arrays

* Think of an array as a list.
* An array is a data structure we can use to store an ordered list.

? Arrays are declared in the same that way we declare variables
? However square brackets "[]" follow the assignment operator "="

* EXAMPLE: "let array = []"

? Items in an array are separated by a comma within the square brackets
*/

// * Declaring an array
let array = ["Item 1", "Item 2", "Item 3"];
//              0          1         2

let itemList = ["A String", 2, true, [1,2,3], {age:23, eyes:"blue", hair:"brown"}]

// * Referencing an array - same as any variable
console.log(array);

/*
* Array index
! JavaScript starts counting from zero (0)
*/
console.log(array[0]); //Item 1

/*
! Arrays
* Coffee Order Example:
*/
let coffeeOrder = [
    "James - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
];

// * Log array to the console
console.log(coffeeOrder);

// * We can also output data in table format - console.table():
console.table(coffeeOrder);

/*
* If we want to access a specific item in the array
* we can use bracket notation and reference the index [x]
*/
console.log(coffeeOrder[2]);

// * Using bracket notation we can also edit / update items
coffeeOrder[0] = "James - Flat White";
console.log(coffeeOrder[0]);
/*
* Referencing an index that is undefined, will return undefined
* However we can also set new items to the index with bracket notation
*/
console.log(coffeeOrder[5]);
coffeeOrder[3] = "New array item";
console.log(coffeeOrder[3]);

/*
! Arrays
* Properties and Methods
? As seen with other data, arrays have properties and methods we can access
*/

/*
? .length property 
* In the context of an array the .length property represents the number of items
*/
console.log(coffeeOrder.length);

/*
? .push() method
* Adds a new item to the end of the array
*/
coffeeOrder.push("Christian - Water");
console.log(coffeeOrder);

/*
? .pop() method
* Removes the last item from the array
*/
coffeeOrder.pop();
console.log(coffeeOrder);

/*
! There are numerous array methods, at our disposal that allow
! us to work with, manipulate, sort and filter array data.

* I would recommend taking some time to familiarise yourself
* with the different array methods and what can be acheived
* with them.

TODO: Starting with the array below apply the methods and properties from above and those in the link below:
let colours = ["red","blue","green","yellow"]

? https://www.programiz.com/javascript/library/array
*/

/*
! Loops

* We often need to repeat actions but want to avoid repeating code
* this is where loops come in as they allow us to repeat code
* multiple times.

? Different loops work in different ways
*/

/*
! Loops
* For Loop: Most commonly used loop
? Diagram: https://cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png
* Loop over an array example:
*/

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown"
];

console.log(colours);

console.log(colours[0]);
console.log(colours[1]);
console.log(colours[2]);
console.log(colours[3]);
console.log(colours[4]);

/*
* For Loop:

* Rather than individually logging each item we can use a loop

! In order to breakdown the loop lets look at the 3 sections within brackets

? Firstly we are declaring our index - think of this as a loop counter.
? Secondly we are defining the conditions for our loop - loop while x is true.
? Thirdly we are instructing our counter to increase by one after each loop.

* The body of the loop will be executed the necessary / specified number of times.
* In our example, our loop will run once for every item in the array.
*/
//       0       0<10               0+1
//       1       1<10               1+1
//       2       2<10               2+1
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]); // iterating (looping) through the array
}

/*
* For Loop:
? We can also declare a for loop to run a stated number of times
* Lets write a loop to find every multiple of 2 between 1-20
*/

let multiplesTwo = [];

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        multiplesTwo.push(i);
    }
}

console.log(`The numbers between 1 and 20 that are divisible by 2 are: ${multiplesTwo}`);

/*
? RQ -How do While Loops differ from For Loops? https://www.programiz.com/javascript/while-loop
? WoN/DQ

* While Loop:

!!!! Make sure AUTO-SAVE is OFF !!!!

? A While Loop will run continuously while a condtion is true

* Increment example:
*/

let number = 0;

while (number < 10) {
    console.log(number);
    number++;
}
/*
* While Loop:
! Using a While Loop lets make a basic card game

* First to draw a Spade loses:
? The game will automatically run
? Each loop represents a card being drawn from the deck
? We will check the suit of the card
? If the card is a "Spade" game over and the loop will stop running
*/
let cards = ["Diamond", "Spade", "Club", "Heart"];
let currentCard = "";

while (currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(`GAME OVER: You have drawn a ${currentCard}!`);

//* Task
// let pass = "srhnernaet";
// let userGuess = prompt("Guess the password?");
// let guesses = 0;
// while(userGuess!=pass){
//     let limit = 5;
//     guesses++
//     if(guesses >= limit){
//         alert("You have reached the guess limit!");
//         break;
//     }
//     else{
//         console.log(guesses);
//         alert("sorry that is incorrect, please guess again.");
//         userGuess = prompt("Guess the password?");  
//     }
// };




// do while loop

// checks conditon after the statement has run 
// therefore will always run at least once 
// even if the condition is false

let num = 5

do {
    console.log(num);//5
} while (num < 4);// STOP

// for of  - iterate through an array or string

// array
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    "Friday"];

for (let item of weekdays) {
    console.log(item);
}

// for of - string 

// string
const string = 'Hello World';

// using for...of loop
for (let character of string) {
    console.log(character);
}

/*
? NP - Loops


! Tasks:

? 1: Create an array containing 3 of your favourite films. 
? Use an array method of your choice to add 2 more items to your array, 
? then using a loop I would like you to log each item to the console.

? 2: Using a loop, generate 10 random numbers between 1-100 and log them to the console. 
? You will need to use Math Object within the loop.

? 3: Create a loop that counts backwards from 20 to 0 in the console.

? 4: Generate 5 random numbers between 1-50. 
? For each number generated, check whether it is divisible by 5 or not. 
? Log the result to the console.
*/

for (let i = 5; i >=0; i--) { console.log(i); }
/*
5, 4, 3, 2, 1, 0
False AT -1
*/



// 1:
let favFilms = [
    "Fight Club",
    "No Country For Old Men",
    "The Prestige"
]

favFilms.push("Moneyball", "Superbad");

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}

// 2:
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}

// 3:
for (let i = 20; i >= 0; i--) {
    console.log(i);
}

// 4:
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    if (randomNumber % 5 === 0) {
        console.log(`${randomNumber} IS divisible by 5.`);
    } else {
        console.log(`${randomNumber} is NOT divisible by 5.`);
    }
}


