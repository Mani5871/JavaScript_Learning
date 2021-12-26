console.log("app.js loaded");

restaurants = document.getElementById("restaurants");
restaurants.addEventListener("click", getRestaurants);


function getRestaurants()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://raw.githubusercontent.com/terrenjpeterson/caloriecounter/master/src/data/foods.json", true);

    xhr.onload = function() 
    {
        responseText = xhr.responseText;
        responseText = JSON.parse(responseText);
        restaurant_list = document.getElementById("restaurant_list");
        let restaurant_buttons = "";
        responseText.forEach(function(element)
        {
            restaurant_buttons += `<button class="restaurant_button btn btn-success" id="${element.restaurant}" onclick = "getItems(this.id)">${element.restaurant}</button>`;
        });
        restaurant_list.innerHTML = restaurant_buttons;
    }

    xhr.send();
}

function getItems(text)
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://raw.githubusercontent.com/terrenjpeterson/caloriecounter/master/src/data/foods.json", true);

    xhr.onload = function()
    {
        let responseText = xhr.responseText;
        responseText = JSON.parse(responseText);
        let item_list_div = document.getElementById("item_list_div");
        item_list_div.style.visibility = "visible";
        let item_list = document.getElementById("item_list");

        let table_body = "";
        
        responseText.forEach(function(element)
        {
            
            if(element.restaurant == text)
            {
                // console.log(element);
                console.log(element.foodItems);
                foodItems = element.foodItems;
                foodItems.forEach(function(element)
                {
                    table_body += `<tr>
                    <td>${element.foodName}</td>
                    <td>${element.foodType}</td>
                    <td>${element.protein}</td>
                    <td>${element.calories}</td>
                    </tr>`;
                });

                // table_body += `<tr><td>${element.food}</td><td>${element.calories}</td></tr>`;
            }
        });
        item_list.innerHTML = table_body;
    }
    xhr.send();
}