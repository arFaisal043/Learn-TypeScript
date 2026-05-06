/*
-- Dynamically generalized
--  Generics allow you to create reusable components that work with multiple types while maintaining type safety. 
They act as type variables or type parameters.



// ________ Two way to write an array _________________________

// const arr1: number[] = [1, 2, 3, 4, 5, 6]
const arr1: Array<number> = [1, 2, 3, 4, 5, 6];

// const arr2: boolean[] = [true, false, true, true]
const arr2: Array<boolean> = [true, false, true, true];

// console.log(arr1);
// console.log(arr2);






// _________ Generics Type ____________________________

type genericArray<T> = Array<T>;

const arr3: genericArray<number> = [1, 2, 3, 4, 5, 6];

const arr4: genericArray<boolean> = [true, false, true, true];

// console.log(arr3);
// console.log(arr4);







// ________ Simple generic function __________________________

function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);  // Explicit type

let str1 = identity<string>("hello");         
let str2 = identity("hello");         

console.log(num);
console.log(str1);
console.log(str2);







// _________ Multiple Type Parameters _________________________

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "John" }, { age: 30 });
console.log(result);








// _________ Basic generic interface ___________________________

interface Box<T> {
  value: T;
  getValue(): T;
}

const stringBox: Box<string> = {
  value: "hello",
  getValue() { return this.value; }
};
console.log(stringBox);






// __________________ The Problem Generics Solve __________________________



// __________ WITHOUT GENERICS - Option 1: Use 'any' (loses type safety)
function identity(value: any): any {
  return value;
}

const res = identity("hello");
res.toUpperCase();     // ✅ Works at runtime
res.toFixed(2);        // ❌ NO ERROR at compile time, but CRASHES at runtime!
// TypeScript can't protect you


// _________ WITHOUT GENERICS - Option 2: Use specific types (loses flexibility)
function stringIdentity(value: string): string {
  return value;
}
function numberIdentity(value: number): number {
  return value;
}
// Need a separate function for EVERY type - completely impractical






// _________ WITH GENERICS - Best of both worlds

function identity<T>(value: T): T {
  return value;
}

const result = identity("hello");
result.toUpperCase();     // ✅ TypeScript knows it's a string
result.toFixed(2);     // ❌ Compile-time error - TypeScript protects you!




*/