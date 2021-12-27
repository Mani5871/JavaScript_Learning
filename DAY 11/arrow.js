console.log("arrow function");

const new_fun = ()=> 
{
    console.log("arrow function tutorial");
}

new_fun();

const greet = ()=> 
{
    return "Good Morning";
}

const greet1 = (name) =>  "Good Afternoon " + name;
const obj = () => ({name:"Arun", age:25, city:"Bangalore"});


console.log(greet());
console.log(greet1('Mani Deepak'));
console.log(obj());