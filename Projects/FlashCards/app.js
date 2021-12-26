console.log("App");
showCards();

addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",function() {

    question = document.getElementById("question").value;
    answer = document.getElementById("answer").value;
    
    flashcards = localStorage.getItem("flashcards");
    if (flashcards == null) {
        flashcardsObj = [];
    }
    else {
        flashcardsObj = JSON.parse(flashcards);
    }

    let flag = true;
    flashcardsObj.forEach(function(element)
    {
        if (element.question == question) {
            alert("Question already exists");
            flag = false;
        }
    })
    
    if (flag) 
    {
        let obj = {"question": question, "answer": answer};
        flashcardsObj.push(obj);
        localStorage.setItem("flashcards", JSON.stringify(flashcardsObj));
    }
    showCards();
});

function showCards() {
    let flashcards = localStorage.getItem("flashcards");
    if (flashcards == null) {
        flashcardsObj = [];
    }
    else {
        flashcardsObj = JSON.parse(flashcards);
    }

    let cards = "";
    for (let i = 0; i < flashcardsObj.length; i++) {
        cards += `<div class="card" width = "70px" onclick = "change_text(this.id)" id = "${flashcardsObj[i].question}">
                    <div class="card-body">
                        <h5 class="card-title">${flashcardsObj[i].question}</h5>
                        <p class="card-text"></p>
                        <button class="btn btn-danger" onclick="deleteCard(${i})">Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("card_collection").innerHTML = cards;
}

function change_text(text)
{
    let flashcards = localStorage.getItem("flashcards");
    flashcards = JSON.parse(flashcards);

    card_collection = document.getElementById("card_collection");
    card_children = card_collection.children;
    para_tags = document.getElementsByTagName("p");

    for(let i = 0; i < card_children.length; i++)
    {
        card_text = card_children[i].children[0].innerText;
        if(card_text.includes(text))
        {
            if(card_children[i].children[0].children[1].innerText == "")
                card_children[i].children[0].children[1].innerText = flashcards[i].answer;
            else
                card_children[i].children[0].children[1].innerText = "";
        }
    }
}

function deleteCard(index)
{
    let flashcards = localStorage.getItem("flashcards");
    flashcards = JSON.parse(flashcards);

    for(let i = 0; i < flashcards.length; i++)
    {
        if(i == index)
            flashcards.splice(i,1);
    }
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    showCards();
}