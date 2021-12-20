// Creating, Adding, and Removing elements

let element = document.createElement('li');
element.className = 'child';
element.id = 'child_id';
element.setAttribute('data-id', 'child_data_id');
element.innerHTML = 'Cherry';

list = document.querySelector('.list');
list.appendChild(element);
console.log(element);

let element2 = document.createElement('h3');
text = document.createTextNode("Leechi");
element2.appendChild(text);
element.replaceWith(element2);

list.replaceChild(element2, document.getElementById('item1'));
list.removeChild(document.getElementById('item2'));

text = document.createTextNode("Code With Harry");
atag = document.createElement('a');
atag.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
atag.appendChild(text);
document.body.appendChild(atag);