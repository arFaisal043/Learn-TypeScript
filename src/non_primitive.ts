// JS: Array, Object
// ts: Tuple



// _______ string type array__________________

let bazarList: string[] = ["eggs", "sugar", "rice", "milk"];
console.log(bazarList);

bazarList.push("salt")
console.log(bazarList);




// _______ string and number type array__________________

// let mixedArr = ["eggs", 12, "sugar", 2, "rice", 3]; // ts automatically understand that, here only can string and number
let mixedArr: (string | number)[] = ["eggs", 12, "sugar", 2, "rice", 3];
console.log(mixedArr);
mixedArr.push(123)
console.log(mixedArr);





// _________ Tuples _______________________

// - A tuple is a typed array with a pre-defined length and types for each index.

let studentInfo: [number, string, boolean] = [1, "Faisal", true];
studentInfo.push(123)
console.log(studentInfo)








// _________ Object _______________________

// const car: { type: string; model: string; year: number } = {
//     type: "Toyota",
//     model: "Corolla",
// };
// here we get error bcz year is declared but not assign


// soln: Optional Chaining
const car: { type: string; model: string; year?: number; readonly color: string } = {
    type: "Toyota",
    model: "Corolla",
    color: "red"
};
 
// car.color = "blue"; // get error
// console.log(car);
