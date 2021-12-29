console.log("async.js");

let shop_opened = (is_shop) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(is_shop){
                resolve("Shop is opened");
            }
            else
            {
                reject("Shop is closed");
            }
        }, 1000);
    })
}

let ice_cream_started = (is_machine_working) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(is_machine_working){
                resolve("Ice cream started");
            }
            else
            {
                reject("Machine is not working");
            }
        }, 3000);
    })
}

let toppings_available = (fruit) => {
    let fruits = ['apple', 'banana', 'orange', 'pear', 'pineapple', 'strawberry'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(fruits.includes(fruit)){
                resolve("Toppings available");
            }
            else
            {
                reject('Toppings not available');
            }
        }, 2000);
    })
}

// shop_opened(true).then((opened) => {
//     console.log(opened);
//     return ice_cream_started(true)
// }).then((started) => {
//     console.log(started);
//     return toppings_available('apple')
// }).then((toppings) => {
//     console.log(toppings)
// }).catch((error) => {
//     console.log(error);
// });

async function ice_cream_status()
{
    try
    {
        const shop = await shop_opened(true);
        const ice = await ice_cream_started(false);
        const toppings = await toppings_available('apple');
    
        console.log(shop);
        console.log(ice);
        console.log(toppings);
    }

    catch(error)
    {
        console.error(error);
        console.log("Ice cream not available")
    }

}

ice_cream_status().then(status => console.log(status));