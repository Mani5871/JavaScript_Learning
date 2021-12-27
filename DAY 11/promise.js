console.log("Promise");

function func1()
{
    prom =  new Promise(function(resolve,reject)
    {
        setTimeout(function()
        {
            const error = false;
            if(error == true)
            {
                console.log("Promise resolved");
                resolve();
            }
            else
            {
                console.log("Promise not resolved");
                reject('Very bad dude');
            }
        },1000);

    });

    return prom;
}

let new_prom = func1();
new_prom.then(function()
{
    console.log("Promise resolved Main function");
}).catch(function(error)
{
    console.log("Promise not resolved " + error);
})

console.log(new_prom);