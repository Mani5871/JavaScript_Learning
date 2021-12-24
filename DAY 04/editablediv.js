
let edit_div = document.getElementById("edit");
edit_div.contentEditable = true;

localStorage.clear();
let i = 1
document.addEventListener("click", function(event) {

    if (event.target != edit_div && !edit_div.contains(event.target)) {
        edit_div.contentEditable = false;

        let array_name = "Array" + i.toString();
        let arr = edit_div.innerText
        let fruits = [];
        Array.from(arr).forEach(function(element) {
            element = element.replace(/^\s+|\s+$/g, '');
            fruits.push(element);
        });
        console.log(fruits);
        localStorage.setItem('Array' + i.toString(), fruits);
        i += 1;
        
    }
});