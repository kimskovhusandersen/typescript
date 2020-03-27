const carMakers = ["ford", "toyota", "chevy"]; // string[]
const dates = [new Date(), new Date()]; // Date[]
const carsByMake = [["f150", "corolla", "camaro"]]; // string[][]

const car = carMakers[0]; // string
const myCar = carMakers.pop(); // string

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

const importantDates = [new Date(), "2030-10-10"]; // (string | Date)
importantDates.push("hi");
importantDates.push(new Date());
