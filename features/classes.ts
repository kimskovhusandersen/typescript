// Classes
// public, private and protected

// public methods can be called anywhere, any time
// private methods can only be called by other methods in this class
// protected methods can be called by other methods in this class or by other
// methods in child classes

class Vehicle {
    // protected drive(): void {
    //     console.log("chugga chugga");
    // } // can't be declared here, as it's also declared in the child class marked as private
    protected honk(): void {
        console.log("honk honk!");
    }
}

const vehicle = new Vehicle();
// vehicle.honk(); // can't be called here as it's marked as protected

class Car extends Vehicle {
    private drive(): void {
        console.log("wrooooom");
    }
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();
car.startDrivingProcess();
// car.honk(); // can't be executed as method is protected

// Instanciating a class
class Cars {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}
// .. is the same as:
class Automobile {
    constructor(public color: string) { }
}

class Ford extends Cars { }
class Honda extends Automobile { }
const ford = new Ford("red");
const honda = new Honda("red");
console.log(ford.color);
console.log(honda.color);

class Fiat extends Automobile {
    constructor(public wheels: number, color: string) {
        super(color);
    }
}
const fiat = new Fiat(4, "blue");
