console.log("function")

// Way 1 to create a function
function create(name, val = "default")
{
    console.log(name + ": " + val);
}

create("Mani Deepak", "Good Boy");
create("Mani Deepak");

// Way 2 to create a function
const greet = function(name, val = "good")
{
    console.log(name + ": " + val);
}

greet("Mani Deepak", "Good");
greet("Mani Deepak");

// One can also define a function in an object

const myobj = 
{
    name: "Mani Deepak",
    function: function(name, val = "good")
    {
        return name + ": " + val;
    }
}

console.log(myobj.function("Mani Deepak", "Good"));
console.log(myobj.function("Mani Deepak"));

arr = ['apple', 'banana', 'orange', 'grapes'];
arr.forEach(function(element, index, array)
{
    console.log(element, index, array);
});