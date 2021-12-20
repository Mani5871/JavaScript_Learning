console.log("Edit");

let edit_div = document.getElementById("edit");
edit_div.contentEditable = true;

localStorage.clear();
let i = 1
document.addEventListener("click", function(event) {

    if (event.target != edit_div && !edit_div.contains(event.target)) {
        edit_div.contentEditable = false;

        let array_name = "Array" + i.toString();
        let arr = edit_div.innerText
        console.log(typeof arr);
        arr = arr.split("\n");
        i += 1;

        localStorage.setItem(array_name, JSON.stringify(arr));
        
    }
});