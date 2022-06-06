const globalPlayer={
    id:0,
    name:"Nidhin",
    power:100
}


const player1= {...globalPlayer} //COPY ,WHICH IS MUTABLE
 player1.power=50
console.log(player1)
console.log(globalPlayer)


const globalPlayer1=["Ramu","Ajay","John"]
const globalPlayer2=["raju","Rafeeq","Nidhin"]

const player2=[...globalPlayer1,...globalPlayer2] //Concatenating arrays
const player3=[...globalPlayer1,"Added"] //Push value into Array

console.log(player2)
console.log(player3)
