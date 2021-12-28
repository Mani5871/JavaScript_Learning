
let display = () => console.log("Message displayed!");
let  message  = (name, message, time, callback)=> setTimeout(() => {console.log(name + " " + message); callback();}, time);
// message("Mani", "Good morning", 5000, display);

let icecream_callback = () => {
    setTimeout(() => {
        console.log("icecream order placed");
        setTimeout(() => {
            console.log("icecream started");
            setTimeout(() => {
                console.log("icecream finished");
                setTimeout(() => {
                    console.log("icecream delivered");
                }, 2000);
            }, 2000);
        }, 1000);
    }, 2000)
}
// icecream_callback();

let is_shop_open = false;

let icecream_promise = (time, work) => {
    return new Promise(  (resolve, reject) => {
        if(is_shop_open)
        {
            setTimeout(() => {resolve(work())}, time);
        }
        else
        {
            reject(console.log("Shop is closed"));
        }
    });
}

let icecream_started = (time, work, machine) => {
    
    return new Promise((resolve, reject) => {
        if(machine == true)
        {
            setTimeout(() => {resolve(work())}, time);
        }
        else
        {
            reject(console.log("Machine is not working"));
        }
    });
}

let prom1, prom2, prom3, prom4;


let fruit_chopped = (time, work, fruit) => {
    
    return new Promise((resolve, reject) => {
        let fruits = ['apple', 'orange', 'banana', 'mango'];
        if(fruits.includes(fruit.toLowerCase()))
        {
            setTimeout(() => {resolve(work())}, time);
        }
        else
        {
            reject(console.log("No such fruit"));
        }
    })
};

let icecream_finished = (time, work) => {
    return new Promise((resolve, reject) => {
        let is_finish = true;
        if(is_finish)
        {
            setTimeout(() => {resolve(work())}, time);
        }
        else
        {
            reject(console.log("Icecream is not finished"));
        }
    })
};

icecream_promise(1000, () => console.log("icecream ordered"))
    .then(() =>{
        prom1 = icecream_started(0000, () => console.log("icecream started"), true);
        return prom1;
    })

    .then(() => {
        prom2 = fruit_chopped(1000, () => console.log("fruit chopped"), "apple");
        return prom2;
    })

    .then(() => {
        prom3 = icecream_finished(2000, () => console.log("icecream finished"));
        return prom3;
    })

    .catch(() => {
        console.log("Error Occured");
    })

    .finally(() => {
        setTimeout(() => {
            let tot_prom = Promise.all([prom1, prom2, prom3]);
            tot_prom.then(() => console.log("All promises are resolved"))

                .catch(() => {
                    let any_prom = Promise.any([prom1, prom2, prom3]);
                    any_prom.then(() => console.log("Atleast one promise is resolved"))
                        .catch(() => console.log("No promises are resolved"))
                        .finally(() => console.log("Finally"));
                })

                .finally(() => {
                    console.log("Please visit again");
                });
        }, 2000);
        
    });

let promise1, promise2, promise3, totalPromises;

totalPromises = () => {
    setTimeout(() => {
        return Promise.all([promise1, promise2, promise3])
            .then(() => console.log("All promises are resolved in undefined"))
            .catch(() => console.log("All promises are not resolved"))
    }, 6000);
}

totalPromises();