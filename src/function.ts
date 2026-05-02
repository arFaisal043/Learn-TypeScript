// function: 1. normal, 2. arrow

// ________ Normal _______________

// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(1, 2));





// ________ Arrow ________________

// const sum = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(sum(1, 2));







// _________ Method _____________________

// - When a function use in an object or classes

let totalBalance;
const userBalance = {
    name: "Faisal",
    balance: 100,
    // define a method
    addBalance(val: number): number {
        totalBalance = this.balance + val;
        return totalBalance;
    }
}

userBalance.addBalance(1000);
console.log(`Total Balance is: ${totalBalance}`); // 1100






// _________ Callback _____________________

// - When a function passed as an argument / parameter


const arr: number[] = [1, 2, 3, 4, 5];

const newArr = arr.map( (elm: number): number => {
    return elm * elm;
})
console.log(newArr);
