console.log("DOM");

let obj = document.forms;

Array.from(obj).forEach(function(item, index)
{
    console.log(item);
});

image_collection = document.images;
console.log(image_collection);

Array.from(image_collection).forEach(function(item, index)
{
    console.log(item);
});

script_collection = document.scripts;
console.log(script_collection);