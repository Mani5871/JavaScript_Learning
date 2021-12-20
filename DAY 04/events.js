console.log("events.js");

heading = document.getElementById('heading');
heading.addEventListener('click', function(e) {
    console.log('Heading clicked');
    console.log(e);
});