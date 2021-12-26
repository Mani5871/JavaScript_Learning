console.log("Ajax");

let fetchbtn = document.getElementById("fetch-btn");
let backupbtn = document.getElementById("backup-btn");
fetchbtn.addEventListener("click", buttonClickHandler);
backupbtn.addEventListener("click", backupButtonClickHandler);

function buttonClickHandler() 
{
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

    // POST Request
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.getResponseHeader("Content-type", "application/json");

    xhr.onreadystatechange = function () 
    {
        console.log(xhr.readyState);
    }
    xhr.progress = function()
    {
        console.log("Progress");
    }

    xhr.onload = function()
    {
        if(this.status == 200)
        {
            console.log(this.responseText); 
        }
        else
        {
            console.log("File not found");
        }
    }
    // let params = "name=test&salary=123&age=23";
    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);
}

function backupButtonClickHandler()
{
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    xhr.onload = function()
    {
        let obj = JSON.parse(this.responseText);
        console.log(obj.data);
        let str = "";
        let list = document.getElementById("list");

        empArr = obj.data;
        empArr.forEach(function(element)
        {
            str += `<li>${element.employee_name}</li>`;
        });

        list.innerHTML = str;
    }
    xhr.send()
}