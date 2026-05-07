/*
-Utility types are built‑in generic types that transform other types in common ways. They save you from writing
repetitive type transformations by hand.


*/

// _________ 1. Partial<Type> ____________________________

// - Makes all properties optional.

interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>) {
  // updates can have any subset of User properties
}

updateUser(1, { name: "New Name" }); // ✅
updateUser(2, { email: "new@email.com" }); // ✅
updateUser(3, {}); // ✅




// _________ 2. Required<Type> ____________________________

// -Makes all properties required (opposite of Partial).

interface Config {
  url?: string;
  timeout?: number;
  retries?: number;
}

const defaultConfig: Required<Config> = {
  url: "https://api.example.com",
  timeout: 5000,
  retries: 3,
}; // All properties must be provided






// _________ 3. Readonly<Type> ____________________________

// - Makes all properties read‑only (cannot be reassigned).

interface Point {
  x: number;
  y: number;
}

const point: Readonly<Point> = { x: 10, y: 20 };
// point.x = 30; // ❌ Error: Cannot assign to 'x' because it is a read-only property






// _________ 4. pick<Type, Keys> ____________________________

// - Creates a type by selecting a subset of properties.

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

// we don't need all properties to write preview
type ProductPreview = Pick<Product, "id" | "name" | "price">;

const preview: ProductPreview = {
  id: 1,
  name: "Laptop",
  price: 999,
}; // Only allowed properties








// _________ 5. Omit<Type, Keys> ____________________________

// - Creates a type by excluding properties. (opposite of pick)

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type PublicUser = Omit<User, "password" | "createdAt">;

const publicUser: PublicUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
}; // password and createdAt omitted






// _________ 6. Exclude<Type, ExcludedMembers> ____________________________

// - Removes types from a union.

type Status = "success" | "error" | "loading" | "idle";
type NonAsyncStatus = Exclude<Status, "loading" | "idle">; // "success" | "error"

const status1: NonAsyncStatus = "success";
console.log(status1);







// _________ 7. Extract<Type, ExcludedMembers> ____________________________

// - Keeps only types that are present in both unions. --> Like intersection

type Event = "click" | "hover" | "scroll";
type HTMLEvent = "click" | "focus" | "blur";
type CommonEvent = Extract<Event, HTMLEvent>; // "click"






// _________ 8. NonNullable<Type> ____________________________

// - Removes null and undefined from a type.

type T3 = NonNullable<string | number | null | undefined>; // string | number

function process(value: string | null) {
  const safeValue: NonNullable<typeof value> = value!; // Type becomes string
}