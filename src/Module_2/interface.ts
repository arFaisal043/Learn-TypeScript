// ___________ Normal Interface __________________________________

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

console.log(user); // { id: 1, name: 'John Doe', email: 'john@example.com' }

// ___________ Extends Interface __________________________________

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "TOM",
  age: 3,
  breed: "German Shepherd",
  bark() {
    console.log("Woof!");
  },
};

console.log(myDog);