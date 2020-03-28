// For the purpose of this project, will use the Bubble Sort algorithm
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";

const numbers = [10, 3, -5, 0, 45, -104, 1 * 5, 4 / 46, 0.45];
const numbersCollection = new NumbersCollection(numbers);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const letters = "hhalKJSDasdfaiIISk";
const charCollection = new CharCollection(letters);
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);
