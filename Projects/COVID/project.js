async function getCountries()
{
    let url = 'https://api.covid19api.com/summary'
    const response = await fetch(url);
    const json = await response.json();

    let countries = document.getElementById('countries');
    let country = "";
    country_list = json.Countries;

    country_list.forEach(element => 
    {
        country += `<a class="dropdown-item" href="#" onclick="get_country('${element.Country}')">${element.Country}</a>`;
    });
    countries.innerHTML = country;
}

async function get_country(text)
{
    let dropdownMenuButton = document.getElementById('dropdownMenuButton');
    dropdownMenuButton.innerText = text;
}


async function display_date()
{
    let country = document.getElementById('dropdownMenuButton').innerText;
    country = country.replace(/\s+/g, '-').toLowerCase();
    let url = 'https://api.covid19api.com/total/dayone/country/'+ country;
    let response = await fetch(url);
    let json = await response.json();


    let from_date = (json[0].Date).split('T')[0];
    let to_date = (json[json.length-1].Date).split('T')[0];
    console.log("From date " + json[0].Date);
    console.log("To date " + json[json.length-1].Date);

    document.getElementById('dates').style.visibility = 'visible';

    from_date = "From date " + from_date;
    to_date = "To date " + to_date;

    let from = document.getElementById('from_date');
    let to = document.getElementById('to_date');
    
    from.setAttribute('placeholder', from_date);
    to.setAttribute('placeholder', to_date);
}

async function submit_date()
{

    if(document.getElementById('status').innerText != 'Get All details')
    {
        get_name(document.getElementById('status').innerText);
    }

    else
    {
        let table = document.getElementById('table');
        table.style.visibility = 'visible';
    
        let country = document.getElementById('dropdownMenuButton').innerText;
        country = country.replace(/\s+/g, '-').toLowerCase();
        let url = 'https://api.covid19api.com/total/dayone/country/'+ country;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
    
        let from_date = document.getElementById('from_date').value;
        let to_date = document.getElementById('to_date').value;
        let row = "";
    
        json.forEach(element =>
        {
            let date_time = element.Date.split('T')[0];
            let confirmed = element.Confirmed;
            let deaths = element.Deaths;
            let recovered = element.Recovered;
            let total = confirmed + deaths + recovered;
    
            if(date_time >= from_date && date_time <= to_date)
            {
                row += `<tr>
                            <td>${date_time}</td>
                            <td>${confirmed}</td>
                            <td>${deaths}</td>
                            <td>${recovered}</td>
                            <td>${total}</td>
                            </tr>`;   
            }
        });
        document.getElementById('from_date').value = "";
        document.getElementById('to_date').value = "";
        document.getElementsByTagName('tbody')[0].innerHTML = row;
    }

}

function display_name_menu(text)
{
    document.getElementById('status').innerText = text;
}

async function get_name(status)
{
    document.getElementById('table').style.visibility = 'hidden';
    let country = document.getElementById('dropdownMenuButton').innerText;
    country = country.replace(/\s+/g, '-').toLowerCase();
    let url = 'https://api.covid19api.com/total/dayone/country/'+ country;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);

    let from_date = document.getElementById('from_date').value;
    let to_date = document.getElementById('to_date').value;

    // Constructing the table with date and status field

    let table_by_name = document.getElementById('table_by_name');
    table_by_name.style.visibility = 'visible';

    document.getElementById('status_entry').innerText = status;
    let row = "";

    json.forEach(element =>
        {
            let date_time = element.Date.split('T')[0];
    
            if(date_time >= from_date && date_time <= to_date)
            {
                let element_status;
                if(status == 'Confirmed')
                    element_status = element.Confirmed;
                else if(status == 'Deaths')
                    element_status = element.Deaths;
                else if(status == 'Recovered')
                    element_status = element.Recovered;
                row += `<tr>
                            <td>${date_time}</td>
                            <td>${element_status}</td>
                            </tr>`;   
            }
        });
        document.getElementsByTagName('tbody')[1].innerHTML = row;
        document.getElementById('from_date').value = "";
        document.getElementById('to_date').value = "";

}
getCountries();