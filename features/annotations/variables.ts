let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "blue", "purple"];
let myNumbers: number[] = [1, 5, 85];
let truths: boolean[] = [true, false];

class Car { }
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// function
// describe what argument is expected (i: number)
// and what values is exptected to be returned: void (void is the same as nothing, null or undefined)
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// ALL OF ABOVE ANNOTATIONS ARE UNNECESSARY!!!

// WHY?

// RULE OF THUMB:
// Whenver we are declaring a variable and assigning a value to it on the same line,
// Typescript will figure out the type for us, so we won't have to type annotations manually!

// WHEN TO USE ANNOTATIONS

// 1) functions that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // coordinates is "any"
console.log(coordinates);

// 2) When we declare a variable on one line
//  and initialize it late
let words = ["red", "green", "blue"];
let foundWord: boolean;

words.map(word => {
    if (word === "green") {
        foundWord = true;
    }
});

// a better way, would be to assign a value right away:
// let foundWord = false

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // letting ts know that the type can either
// be a boolean or a number

numbers.map(number => {
    if (number > 0) {
        numberAboveZero = number;
    }
});
