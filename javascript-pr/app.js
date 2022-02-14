let student = [{
        id: 101,
        Name: 'Ridoy Sharif',
        gpa: 4.58
    },
    {
        id: 102,
        Name: 'Sabbir',
        gpa: 3.11
    },
    {
        id: 103,
        Name: 'Raja',
        gpa: 3.75
    },
    {
        id: 104,
        Name: 'Rana',
        gpa: 4.24
    },
    {
        id: 105,
        Name: 'meraj',
        gpa: 2.24
    },

];

const result = () => student.filter((x) => x.gpa > 4).map((x) => x.Name);
console.log(result());