const globalPlayer = [{
    id: 0,
    name: "Nidhin",
    power: 100
},
    {
        id:1,
        name: "Rahul",
        power: 150
    },
    {
        id: 3,
        name: "Sai",
        power: 120
    }
]

//Map method returns a new array based on given condition

const newArray=globalPlayer.map((value)=>{
    return value.name
})

console.log(newArray)
