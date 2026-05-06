// _______ Basic Syntax ____________________________

// T must have a 'length' property
function logLength<T extends { length: number }>(item: T): T {
  console.log(item.length);
  return item;
}

logLength("hello");     // ✅ string has length
logLength([1, 2, 3]);   // ✅ array has length
logLength({ length: 10, value: "hi" }); // ✅ object with length
logLength(123);      // ❌ number has no length property






// ______ Constraining to Specific Type Shape _________________________

interface HasName {
  name: string;
}

function greet<T extends HasName>(person: T): string {
  return `Hello, ${person.name}`;
}

greet({ name: "Alice", age: 30 });  // ✅ Extra properties allowed
greet({ name: "Bob" });              // ✅
greet({ age: 25 });               // ❌ Missing 'name' property