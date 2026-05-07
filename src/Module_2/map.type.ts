const arrayOfNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// convert number array to string array by map
const arrayOfStringByMap: string[] = arrayOfNum.map((val) => val.toString());
console.log(arrayOfStringByMap); // ['1',  '2', '3','4',  '5', '6','7',  '8', '9','10']




// ___________ map type________________________________



// _______ Number type obj:
type AreaOfNum = {
    height: number;
    width: number
}


// _______ Transform number obj to string obj (manual)
// type AreaOfString = {
//     height: string;
//     width: string
// }


// _______ Transform number obj to string obj 
type AreaOfString = {
    [val in keyof AreaOfNum]: string  // this is kind of a loop
}



// _________ Dynamically converted

type Area360<T> = {
    [val in keyof T]: T[val];
}

const area1: Area360<{ height: number; width: number }> = {
    height: 10,
    width: 20
}
