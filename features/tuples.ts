// Tuples are array-like objects with a fixed order of its elements.

// Take a normal object
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// and then a tuple:
const pepsi: [string, boolean, number] = ["brown", true, 40];

// another way is to declare a type first:
type Drink = [string, boolean, number];
const cola: Drink = ["brown", true, 40];
const tea: Drink = ["brown", false, 2];

// While it's important to know tuples exist...
// maybe tuples aren't super usefull in typescript..
const carSpecs: [number, number] = [400, 3354]; // what do those values even represent?

// An object tells the full story immediately
const carStates = {
  horsepower: 400,
  weight: 3354
};
