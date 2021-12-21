
submit = document.getElementById("submit");
text = document.getElementById("text");

submit.addEventListener("click", function (event) {
    event.preventDefault();
    let notes = text.value;
    console.log(text.value);

    notes_div = document.getElementById('notes');
    let notes_arr = Object.keys(localStorage);
    if(notes_arr.length == 0)
        i = 1;
    else
    {
        i = notes_arr[0].slice(5);
        i = parseInt(i) + 1;
    }
    let note = "Note " + i.toString();

    localStorage.setItem(note, notes);      
    
    notes_div.innerHTML += `
        <div class='card' id = ${note}>
            <div class='card-body'>
                <h5 class='card-title'>${note}</h5>
                <p class='card-text'>${notes}</p>
                <button id = note class='btn btn-danger' onclick= 'deleteNote(${this.id})'> Delete</button>
                </div>
            </div>
                `;
});

function deleteNote(note) {
    console.log(note);
    // localStorage.removeItem(note);
    // document.getElementById(note).remove();
}

function display_cards()
{
    let notes_arr = Object.keys(localStorage);
    notes_div = document.getElementById('notes');
    for(let i = 0; i < notes_arr.length; i++)
    {
            notes_div.innerHTML += `
            <div class='card' id = ${notes_arr[i]}>
                <div class='card-body'>
                    <h5 class='card-title'>${notes_arr[i]}</h5>
                    <p class='card-text'>${localStorage.getItem(notes_arr[i])}</p>
                    <button id = note class='btn btn-danger'> Delete</button>
                </div>
            </div>
        `;
    }
}
