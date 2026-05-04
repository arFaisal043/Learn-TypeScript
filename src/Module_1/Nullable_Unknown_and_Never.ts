// __________ Nullable: ---> Input can be Null value

const getUser = (input: string | null) => {
    if(input) {
        console.log("From DB: ", input);
    }
    else {
        console.log("From DB: ALL USER..."); // we want when, input is NULL then return ALL USER
    }
}
getUser("Faisal");
getUser(null);








// __________ Unknown: ---> When we don't know the type of input parameter in development time

// const discountCalc = (input: string | number | null) => {
const discountCalc = (input: unknown) => {
    if(typeof input === "string") return Number(input.split(" ")[0]) * 0.1
    else if(typeof input === "number") return input * 0.1;
    else return "wrong input";
} 

console.log(discountCalc(100));
console.log(discountCalc("100 tk"));
console.log(discountCalc(null));







// __________ void / never: when a function never return anything

const throwError = (msg: string): never => {
    throw new Error(msg);
}
throwError("Error ....");