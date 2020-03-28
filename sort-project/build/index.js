"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For the purpose of this project, will use the Bubble Sort algorithm
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharCollection_1 = require("./CharCollection");
var numbers = [10, 3, -5, 0, 45, -104, 1 * 5, 4 / 46, 0.45];
var numbersCollection = new NumbersCollection_1.NumbersCollection(numbers);
var numberSorter = new Sorter_1.Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);
var letters = "hhalKJSDasdfaiIISk";
var charCollection = new CharCollection_1.CharCollection(letters);
var charSorter = new Sorter_1.Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);
