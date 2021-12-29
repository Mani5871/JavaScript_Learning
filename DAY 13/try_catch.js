console.log("try_catch.js");

let ice_cream_opened = (isopened) => {
    return new Promise((resolve, reject) => {
        if (isopened) {
            resolve("I am opened");
        } else {
            reject("I am closed");
        }
    })
}

let ice_cream_started = (isstarted) => {
    return new Promise((resolve, reject) => {
        if (isstarted) {
            resolve("I am started");
        } else {
            reject("I am stopped");
        }
    });
}

let toppings = (fruit) => {
    let fruits = ['apple', 'banana', 'orange'];
    return new Promise((resolve, reject) =>{
        if (fruits.includes(fruit)) {
            resolve("I am having " + fruit);
        } else {
            reject("I am not having " + fruit);
        }
    });
}

async function ice()
{
    try
    {
        const open = await ice_cream_opened(true);
        const started = await ice_cream_started(false);
        const topping = await toppings('banana');
    }
    catch(err)
    {
        console.log(err.name);
        console.log(err.message);
    }
}

try
{
    ice();
}
catch(err)
{
    console.log(err.name);
    console.log(err.message);
}
