// KeyOf Basic:

type RichPeoplesVehicle = {
    car: string; // key : value
    bike: string;
    cycle: string
}

type MyVehicle1 = "bike" | "car" | "cycle";
type MyVehicle2 = keyof RichPeoplesVehicle; // use RichPeoplesVehicle's key

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
const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

// console.log(myId);
// console.log(myName);
// console.log(myAddress);


// ____ Create a function to get object property   ---> need 2 params: which obj, what in obj

function getPropertyFromObj(obj: User, key: keyof User) {
    return user[key];
}
console.log(getPropertyFromObj(user, "name"));