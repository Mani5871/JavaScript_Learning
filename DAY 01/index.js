console.log("Day 1");

// Variables using const, let, var

var name1 = "Mani";
var name1 = `Mani " Deepak "`
console.log(name1);

const name2 = "Dheeraj";
console.log(name2);


// Const variable must be declared and initialized at the moment

// Let variable has block level scope

{
    let name3 = "Deepak Dheeraj";
    console.log(name3);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.push(9);
arr[0] = 21;
console.log(arr);

/* Most used  notations
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/
console.log(typeof name1);

/*  Primitive Data Types in JavaScript
1. Number
2. String 
3. Boolean
4. Object
5. Undefined
*/

/* Reference Data Types in JavaScript
1. Array (Array can be heterogeneous)
2. Object Literal
3. Function
4. Date
*/

// Object Literals
let myMarks = 
{
    "Maths": 80,
    "Physics": 90,
    "Chemistry": 100
}
console.log(myMarks);

function findMarks()
{

}

let date = new Date();
console.log(typeof findMarks);
console.log(typeof date);

// Type Conversion and Type Coercion
let newVar = 23;
let stringNewVar = String(newVar);
let booleanVar = String(true);
console.log(typeof stringNewVar, stringNewVar, typeof booleanVar, booleanVar);

// Even Dates and Strings can also be converted to strings.

let number = 24;
console.log(number.toString());

let newString = "2434";
newVar = Number(newString);

number = parseInt("2434");
let float = parseFloat("2434.34342342342");

console.log(number, float, typeof number, typeof float);
console.log(Number(float.toFixed(2)));
number = parseInt("2434.34");
console.log(number, typeof number);


// Type Coercion
let newStr = "234723";
let myVar = "34";
console.log(newStr + myVar);