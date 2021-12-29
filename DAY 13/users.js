console.log("users");

async function users()
{
    url = 'https://api.github.com/users';
    const response = await fetch(url);
    console.log("Before displaying response data");
    console.log(response);

    const json = await response.json();
    console.log("After displaying response data");
    console.log(json);

}

function display()
{
    console.log("display");
}

console.log("Before users");
users();
console.log("After users");
display();