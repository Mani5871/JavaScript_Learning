// Arrays and Objects

console.log("Arrays");
const marks = [20, 30, 40, 50, 60, 70, 80];
const fruits = ["Apple", "Orange", "Banana", "Mango"];
const mixed = ["Apple", 20, "Banana", 30, "Mango", 40, "Orange", 50, 60, 70, 80, ["Banana", "Orange"]];

const arr = new Array(20, 30, 40, 50, 60, 70, 80, "Apple", "Orange", "Banana", "Mango");
console.log(arr);

console.log(arr.length);
console.log(Array.isArray(marks));

console.log(marks.indexOf(40));

// Push appends the element to the last of array while unshift appends the element to the first of array
marks.push(90);
marks.unshift(10);
console.log(marks);

// Pop removes the element from the last of array while shift removes the element from the first of array
marks.pop();
marks.shift();
console.log(marks);

marks.splice(2, 4);
console.log(marks);

let details = 
{
    my_name : "Mani",
    my_age : 20,
    my_marks : [20, 30, 40, 50, 60, 70, 80],
    is_active : true,
}

console.log(details.my_marks[2]);

for(let item in marks)
{
    console.log(marks[item]);
}

details.my_marks.forEach(function(item, index, array)
{
    console.log(item, index, array);
});

for(let detail in details)
{
    console.log(detail, details[detail]);
}

// forEach is a method of Array not used for Objects
