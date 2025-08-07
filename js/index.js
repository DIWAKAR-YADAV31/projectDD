const names=["kalakeya","ballaladeva","kattappa","sulemon"]
const person={
     name: "Spongebob",
        age: 30,
        isEmployed: true,
        hobbies:"sleeping"
    };
   const people = [
    {
        name: "Spongebob",
        age: 30,
        isEmployed: true
    },
    {
        name: "Patrick",
        age: 34,
        isEmployed: false
    },
    {
        name: "Squidward",
        age: 50,
        isEmployed: true
    },
    {
        name: "Cummins",
        age: 27,
        isEmployed: false  
    }
];
const jsonString=JSON.stringify(people);
console.log(jsonString);



