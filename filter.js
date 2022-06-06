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

//Filter returns a new array based on the condition which will filter the given array...like displaying player details whose power is less than 100
//has 3 args ;value,index,array
const newArray=globalPlayer.filter((value)=>{
    return value.power<100 && value.id===4
})

console.log(newArray)
