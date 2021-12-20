console.log("Local Storage");

localStorage.setItem('name1', 'John');
localStorage.setItem('name2', 'Mani');

let new_name = localStorage.getItem('name');
console.log(new_name);

localStorage.removeItem('name');

// Clears entire storage
// localStorage.clear();

let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
localStorage.setItem('fruits', JSON.stringify(fruits));

let fruit_obj = JSON.parse(localStorage.getItem('fruits'));
console.log(fruit_obj);

sessionStorage.setItem('name1', 'John');
sessionStorage.setItem('name2', 'Mani');
sessionStorage.setItem('fruits', JSON.stringify(fruits));
sessionStorage.removeItem('name');