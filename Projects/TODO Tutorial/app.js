showNotes();

addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function(){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObj = [];
    }

    else{
        notesObj = JSON.parse(notes);
    }

    if(addtxt.value != "")
    {
        notesObj.push(addtxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addtxt.value = "";
        console.log(notesObj);
    }

    else
    {
        alert("Please enter a note");
    }

    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObj = [];
    }

    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" href="#" class="btn btn-danger">Delete Note</button>
            </div>
        </div>
        `;
    });

    let noteselm = document.getElementById("notes");
    if (notesObj.length != 0){
        noteselm.innerHTML = html;
    }
}

function deleteNote(index){
    console.log("delete note", index);

    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }

    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    
}