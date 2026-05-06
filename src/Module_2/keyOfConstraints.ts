// KeyOf Basic:

type RichPeoplesVehicle = {
    car: string; // key : value
    bike: string;
    cycle: string
}

// These two way are same
type MyVehicle1 = "bike" | "car" | "cycle";
type MyVehicle2 = keyof RichPeoplesVehicle; // use RichPeoplesVehicle's key --> car, bike, cycle

const myVehicle1: MyVehicle1 = "car";
const myVehicle2: MyVehicle2 = "ship"; // error: ship is not in RichPeoplesVehicle 






// _________ keyOf Constraints ________________________________

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 1,
    name: "Faisal",
    address: {
        city: "dhaka"
    }
}


// ____ get object property

// const myId = user.id;
const myId = user["id"]; // another way to get object elements
const myName = user["name"];
const myAddress = user["address"];

// console.log(myId);
// console.log(myName);
// console.log(myAddress);


// ____ Create a function to get object property/ elements   ---> need 2 params: which obj, what in obj

function getPropertyFromObj(obj: User, val: keyof User) {
    return user[val];
}
console.log(getPropertyFromObj(user, "name"));