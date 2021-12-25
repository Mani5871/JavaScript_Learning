console.log("oops.js");

let car = 
{
    name : "BMW",
    model : "X5",
    year : 2018,
    topSpeed: 200,
    run: function()
    {
        console.log("Running");
    }
}

console.log(car.run());

class Car
{
    constructor(name, model, year, topSpeed)
    {
        this.name = name;
        this.model = model;
        this.year = year;
        this.topSpeed = topSpeed;
    }

    run()
    {
        console.log(`${this.name} is running`);
    }

    static topSpeedLimit()
    {
        console.log("Top Speed Limit is 200");
    }

    
}
let car1 = new Car("BMW", "X5", 2018, 200);
let car2 = new Car("Audi", "A4", 2017, 180);
car1.run();
// Javascript donot support overloading

class Mercedes extends Car
{
    constructor(name, model, year, topSpeed, price)
    {
        super(name, model, year, topSpeed);
        this.price = price;
    }

    run()
    {
        console.log(`Mercedes sub class is running`);
    }
}

let mercedes1 = new Mercedes("Mercedes", "AMG", 2019, 300, 20000);
mercedes1.run();
Car.topSpeedLimit();