const globalPlayer = [
    {
        id: 1,
        name: "Nidhin",
        power: 100,
    },
    {
        id: 2,
        name: "Rahul",
        power: 50,
    },
    {
        id: 3,
        name: "Sai",
        power: 120,
    },
    {
        id: 4,
        name: "Krishna",
        power: 60,
    },
];

//Find return the object associated with a given condition

const newObj=globalPlayer.find((value)=>
{
    return value.name==="Krishna"
})

console.log(newObj)
