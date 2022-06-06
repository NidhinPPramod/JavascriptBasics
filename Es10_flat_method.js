// const numArray = [10,[20,[40,60],70],30]; //nested array
//
// console.log(numArray.flat()) //for single nested array
// console.log(numArray.flat(infinity))//foo multiple nested array


const globalPlayer = [
    {
        id: 1,
        name: "Nidhin",
        power: 100,
        team:{
            team_name:"Strikers"
        },
    }
];

// console.log(globalPlayer)

//for api responses

// if(globalPlayer && globalPlayer.team && globalPlayer.team.team_name)
// {
//     console.log(globalPlayer.team.team_name)
// }

//simple method in ES10 as chaining

if(globalPlayer?.team?.team_name)
{
    console.log(globalPlayer.team.team_name)
}
