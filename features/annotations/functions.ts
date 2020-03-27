// A fuctions that takes two arguments, both of the type number,
// and returns a value of the type number

const add = (a: number, b: number): number => {
    return a + b;
};

// Typescript can figure out the return value type, so we don't have to use the annotation,
// but if we don't add a return value annotation, typescript doesn't give us an error, if
// we return a "wrong" return value type
const subtractNoReturnValueAnnotation = (a: number, b: number) => {
    console.log(a, b)
    return "not a number";
};

// Therefore, use return value annotation
const subtract = (a: number, b: number): number => {
    return a - b;
};
function divide(a: number, b: number): number {
    return a / b;
}
const multiply = function(a: number, b: number): number {
    return a * b;
};

// void means nothing, undefined or null
const logger = (message: string): void => {
    console.log(message);
};

// The annotation never is rarely used,
// but tells ts that we'll never reach the return statement of the function
const throwError = (message: string): never => {
    throw new Error(message);
};

// a more typical example
const returnMessage = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};

const todaysWeather = {
    date: new Date(),
    weather: "sunny"
};

// Using ES2015 syntax we would supposely destructure the arguments
// the syntax for this is destructure first, then add the annotations
const logWeather = ({
    date,
    weather
}: {
        date: Date;
        weather: string;
    }): void => {
    console.log(date);
    console.log(weather);
};
