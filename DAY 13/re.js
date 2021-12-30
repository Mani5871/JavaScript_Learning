console.log("Regex");

let reg = /Mani/g; // Regular Expression Literal in Javascript
let reg1 = /Mani/i; // Case Insensitive
console.log(reg);
console.log(reg.source);

/* Functions to match expressions
    exec() - Returns the matched expression
    test() - Returns true or false

*/

let string = 'Mani Deepak is good boy and people call him as Mani';
let result = reg.exec(string);
console.log(result);
// Use global flag to get other occurences
result = reg.exec(string);
console.log(result);


result = reg.test(string);
console.log(result);
