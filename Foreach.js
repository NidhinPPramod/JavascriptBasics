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

//Simple for loop
for(let i=0;i<globalPlayer.length;i++)
{
    console.log(globalPlayer[i])
}

//For Each
 globalPlayer.forEach((value,index,array)=>{
     console.log(value.name)//display specific value
     console.log(index)//display index
     console.log(array)//Display full array
 })
