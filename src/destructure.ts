// _________ Destructure from an object ________________________


// Nested object

const user = {
    name: "Faisal",
    id: 123,
    project: {
        dev: {
            first: "template",
            second: "portfolio",
            third: "e-com", 
        },
        ai: "CNN",
        data: "Churn Analysis"
    }
}


// without destructuring
// const userName = user.name;
// const thirdProject = user.project.dev.third;  // e-com


// with destructuring
// const { name } = user; // Faisal
// const { project: { dev: { third } } } = user;
// console.log(third) // e-com








// _________ Destructure from an Array ________________________


// ex: 1

const arr = [1, 2, 3, 4];
const [first, second, third, fourth] = arr;
console.log(first);




// ex: 2

const friends = ["x", "y", "z"];
const [, , bestFriend] = friends;
console.log(bestFriend); // z