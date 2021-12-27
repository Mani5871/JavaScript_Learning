console.log("callback.js");

const students = 
[
    {name: 'John', subject: 'math'},
    {name: 'Jane', subject: 'Science'},
    {name: 'Jack', subject: 'English'},
    {name: 'Jill', subject: 'History'},
]

function enrollStudent(student)
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {  
            let oldLength = students.length;
            students.push(student);
            let newLength = students.length;
            let error;
            if(newLength > oldLength)
                error = false;
            if(!error)
                resolve();
            else
                reject();
        }, 3000);
    });
    
}

function getStudents()
{
    let students_div = document.getElementById('students');
    let student_list = "";
    setTimeout(function()
    {
        students.forEach(function(student)
        {
            student_list += `<li>${student.name}</li>`;
        });
        students_div.innerHTML = student_list;
    }, 3000);
}

let std = {name: 'Manish', subject: 'JS'};
enrollStudent(std).then(function()
{
    getStudents();
    console.log("Students Fetched");
}).catch(function()
{
    console.log("Error");
});