// String methods, Arrays and Objects

console.log("Day 02 Started");

// const my_name = "Mani Deepak";
// const greeting = "Hello";
// console.log(greeting + " " + my_name);

let html;
html = "<h1>Hello</h1>";
console.log(html);
html = html.concat("<h2>World</h2>");
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());

console.log(html[0]);
console.log(html.indexOf("<h1>"));
console.log(html.lastIndexOf("<"));

console.log(html.includes("<h1>"));
console.log(html.substring(-4));
console.log(html.slice(-4));
console.log(html.split(">"));

let fruit = "Apple";
let fruit1 = "Orange";

let tag = `<h1>Hello</h1>
            <p>World</p>
            <p>Mani</p>
            <p>${fruit}</p>
            <p>${fruit1}</p>`;
document.write(tag);
