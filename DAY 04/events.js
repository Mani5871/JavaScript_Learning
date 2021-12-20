console.log("events.js");

heading = document.getElementById('heading');
heading.addEventListener('click', function(e) 
{
    console.log('Heading clicked');
    console.log(e.target);
    console.log(e.target.innerHTML);
    console.log(e.target.id);
    class_list = e.target.classList;

    Array.from(class_list).forEach(function(item) 
    {
        console.log(item);
    });
});

heading.addEventListener('mouseover', function(e) 
{
    console.log('Heading mouseover');
});

button = document.getElementById('btn_id');
button.addEventListener('click', click_event);
button.addEventListener('dblclick', double_click);

function click_event(event) 
{
    event.preventDefault();
    console.log('Button Single clicked');
}

function double_click(event) 
{
    event.preventDefault();
    console.log('Button Double clicked');
}

button.addEventListener('mouseenter', function(event)
{
    console.log('Button mouseenter');
});

button.addEventListener('mouseleave', function(event)
{
    console.log('Button mouseleave');
    console.log(event.offsetX);
    document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetX}, 154)`;
})