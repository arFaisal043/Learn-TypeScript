
const kgToGmConverter = (val: number | string | undefined): number | string | undefined => {
    if(typeof val === "number") {
        return `Value is: ${val * 1000}`;
    }
    else if(typeof val === "string") {
        return `Value is: ${Number(val.split(" ")[0]) * 1000}`;
    }
};

const result1 = kgToGmConverter(5) as number; // If we sure params will be a just only Number
console.log(result1);
// result1.    -> only show number type method

const result2 = kgToGmConverter("5 kg") as string; // If we sure params will be a just only String
console.log(result2);
// result2.    -> only show string type method