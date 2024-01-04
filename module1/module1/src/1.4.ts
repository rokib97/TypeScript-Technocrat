// Explicit types
let firstName: string = "Rokib";
let myNumber: number = 97;
let isAdmin: boolean = false;
let x: undefined = undefined;
let y: null = null;

// any type => not recomended to use any type
let d: number;
d = 12;
// d = "rokib"; not accepted as we told its number type

// array
let names: string[] = ["akhi", "sarmin", "neela"]; //only string accepted
names.push("rokib"); //accepted
// names.push(15); //not accepted

let age: number[] = [21, 24, 24]; //only number accepted
age.push(69); //accepted
// age.push("nine") not accepted

// tuple => array => order => types of value
let ages: [number, number] = [10, 20];
let ageNum: [string, number, boolean] = ["rokib", 25, true]; // maintain order
