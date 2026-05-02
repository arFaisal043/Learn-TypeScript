// Primitive Data Type

// In JS: String, Number, Boolean, Undefined, Null, Any
// In TS extra add: Never, Unknown, Void


/*

// _________ string:
let str: string = "Abdur Rahman Faisal";
console.log(str);
// str. -> auto suggestion for string method




// _________ number:
let userId: number = 123;
console.log(userId);
// userId. -> auto suggestion for number method




// _________ Boolean
let isLoading: boolean = true;
isLoading = false;



// _________ Any
let x; // x can be any types
x = 123;
x = "hello";



// _________ Undefine
let y: undefined;
// y = 123 // wrong
// y = 'abc' // wrong



// _______ never
// Meaning: This value will never occur (e.g., a function that always throws an error or infinite loop)
// Correct usage: Exhaustive checking, unreachable code

function throwError(message: string): never {
  throw new Error(message);
}



// _______ unknown
// Meaning: Type-safe counterpart of any — value is unknown, must be narrowed
// Correct usage: When you truly don't know the type upfront

let data: unknown = fetchData();
if (typeof data === 'string') {
  // Now safe to use as string
}



// _______ void
// Meaning: Function returns nothing (or undefined)
// Correct usage: Callback functions that don't return a value

function logMessage(msg: string): void {
  console.log(msg);
}




*/



// ________ Practice_______________________

// - Function with explicit parameter and return types
function greet(name: string): string {
return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'








