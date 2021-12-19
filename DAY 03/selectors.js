console.log("Selectors");

/* Types of DOM selectors
    1. ID selector
    2. Class selector
    3. Tag selector
    4. Universal selector
    5. Attribute selector
    6. Pseudo-class selector
    7. Pseudo-element selector
    8. Single-element selector
    9. Multi-element selector
*/

let element = document.getElementById("first");
children = element.childNodes;
parent = element.parentNode;
console.log(parent);
console.log(children);
console.log(element);

element.style.color = "red";
element.style.backgroundColor = "yellow";
element.innerText = "Hello World";

let item = document.querySelector("#first");
classes = document.querySelector(".container");
anchors = document.querySelectorAll("a");

console.log(anchors);
console.log(classes);
console.log(item);

classes.style.color = "Green";

class_items = document. getElementsByClassName("container");
console.log(class_items);

div_items = document.getElementsByTagName("div");

Array.from(div_items).forEach(element =>{
    element.style.color = "red";
});