/*


// __________ Task 1 _____________________________

type CartItemType = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (obj: CartItemType): number => {
    const {price, quantity} = CartItem;

    if(quantity === undefined) {
        return price * 1;
    }
    else {
        return price * quantity;
    }
}

const CartItem: CartItemType = {
  name: "shirt",
  price: 100,
  quantity: 5,
};

console.log(calculateTotal(CartItem)); // 500






// __________ Task: 2 _____________________________


type Person = {
    name: string;
    age?: number
}

type JobDetails = {
    role: string;
    salary?: number
}

// create a new type combine of Person and JobDetails
type EmployeeType = Person & JobDetails;

const Employee: EmployeeType = {
    name: "Faisal",
    role: "Software Engineer",
};

// use inline destructure
const getProfile = ({ name, role }: EmployeeType): string => {
  //const {name, role} = item;
  return `Name: ${name}, Role: ${role}`;
};
console.log(getProfile(Employee));






// __________ Task: 3 _____________________________

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const getZipCode = (response: UserResponse): string => {
  return response.info?.address?.zipCode ?? "00000";
};


// ____ Test Case:
const validResponse: UserResponse = {
  info: {
    address: {
      zipCode: "90210"
    }
  }
};

const missingZipResponse: UserResponse = {
  info: {
    address: {}
  }
};

const emptyResponse: UserResponse = {};

console.log(getZipCode(validResponse));     // "90210"
console.log(getZipCode(missingZipResponse)); // "00000"
console.log(getZipCode(emptyResponse));      // "00000"


*/






