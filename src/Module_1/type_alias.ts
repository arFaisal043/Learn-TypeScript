/* A type alias is a way to give a custom name to any type in TypeScript. 
It allows you to create reusable, readable, and maintainable type definitions.



// 1. Primitive Types

type UserID = string;
type Age = number;
type IsActive = boolean;

let id: UserID = "abc123";
let userAge: Age = 25;
let active: IsActive = true;







// 2. Union Types

type Status = "pending" | "approved" | "rejected";
type Result = number | string | boolean;

let currentStatus: Status = "pending"; // valid
let value: Result = 42; // valid






// 3. Object Types

type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 123,
    name: "Faisal"
}







// 4. Function Types

type MathOperation = (a: number, b: number) => number;
type Callback = (data: string) => void;

const add: MathOperation = (a, b) => a + b;
const log: Callback = (data) => console.log(data);






// 5. Tuple Types

type Point = [number, number];
type RGB = [number, number, number];

const coordinates: Point = [10, 20];
const redColor: RGB = [255, 0, 0];







// 6. Array Types

type StringArray = string[];
type NumberArray = Array<number>;

const names: StringArray = ["Alice", "Bob"];
const ages: NumberArray = [25, 30, 35];

*/





