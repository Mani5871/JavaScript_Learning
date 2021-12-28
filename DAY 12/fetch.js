console.log("Fetch");

function getData() 
{
    // let url = "Mani.txt";
    let url = "https://raw.githubusercontent.com/terrenjpeterson/caloriecounter/master/src/data/foods.json";
    
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

function postData()
{
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let params = {
        method: "post",
        headers: {
            // "Content-Type": "application/json"
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    };

    fetch(url, params).then(response => response.json()).then(data => console.log(data));
}

getData();
postData();