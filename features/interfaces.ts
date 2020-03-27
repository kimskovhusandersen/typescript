// An interface is a custom type that you define

// Here is the traditional way...

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printVehicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
}): void => {
    console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken? ${vehicle.broken}
    `);
};

printVehicle(oldCivic);

// You can easily imagine that the annotation can get quiet nasty-looking the larger the object is

// Here is the way using interface:
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const printVehicleWithInterface = (vehicle: Vehicle): void => {
    console.log(vehicle.summary);
};
printVehicleWithInterface(oldCivic);

// Since we are not using the other properties any longer, we can leave those out from the interface:
interface Vehicle {
    summary(): string;
}

// However, the name "Vehicle" isn't very appropriate for this interface any longer:
interface Reportable {
    summary(): string;
}
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);

// Coming back to our drink example
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// As we have a function called summary that returns a string here as well,
// we can use the same interface:
printSummary(drink);
