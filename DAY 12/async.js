console.log("Async");

async function getData()
{
    console.log("getData");
    return "Mani Deepak";
}

console.log("Before calling");
let a = getData();
console.log("After calling");
console.log(a);