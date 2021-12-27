console.log("callback.js");

const students = 
[
    {name: 'John', subject: 'math'},
    {name: 'Jane', subject: 'Science'},
    {name: 'Jack', subject: 'English'},
    {name: 'Jill', subject: 'History'},
]

function enrollStudent(student, callback)
{
    setTimeout(function()
    {  
        students.push(student);
        callback();
    }, 3000);
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
    }, 1000);
}

let std = {name: 'Manish', subject: 'JS'};
enrollStudent(std, getStudents);