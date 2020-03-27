// An example of a function being defined inside an object with the function annotation
const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// Destructuring age and name of the object above:
const { age, name }: { age: number; name: string } = profile;

// Destructuring the lat and lng:
const {
    coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
