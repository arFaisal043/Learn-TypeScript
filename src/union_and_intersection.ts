/* 
*/

// _______ Union Types (|) --> OR ____________________________

type status = "pending" | "approved" | "rejected";

const orderStatus: status = "pending"; // ✅ valid
const order_Status: status = "cancelled"; // ❌ error

// console.log(orderStatus);
// console.log(order_Status);




// _________ Union with function:

function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

// console.log(formatValue("hello")); // "HELLO"
// console.log(formatValue(42.567)); // "42.57"





// __________ Union with Arrays:

type MixedArray = (string | number)[];
let items: MixedArray = [1, "two", 3, "four"]; // ✅ valid

console.log(items);










// _______ Intersection  Types (&) --> AND ____________________________




// ________ Basic Intersection Types:

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

const worker: (Person & Employee) = {
    name: "Alice",    
    age: 30,            
    employeeId: "E123", 
    department: "Engineering" 
};  