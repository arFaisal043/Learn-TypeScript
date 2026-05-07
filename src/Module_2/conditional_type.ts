// - A conditional type selects a type based on a condition


// example: 1
type A = null;
type B = undefined;

type C = A extends null ? true : false; // true
type D = A extends number ? true : false; // false




// example: 2

type RichPeopleVehicles = {
    bike: string;
    car: string;
    cycle: string
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? true : false;

type HasBike = CheckVehicle<"bike">; // true
type HasShip = CheckVehicle<"ship">; // false