const globalPlayer1=["Ramu","Ajay","John"]

const[first,second,third]=globalPlayer1

console.log(first)
console.log(second)  /*Array Destructuring*/
console.log(third)


const globalPlayer={
    id:0,
    name:"Nidhin",
    power:100
}

// const {name,id,power}=globalPlayer //Same name as in Object irrespective of order

// console.log(name)  //Object Destructuring
// // console.log(id)
// console.log(power)

// console.log(name,id,power)


const {id,...rest}=globalPlayer //rest operator give the remaining data as object

console.log(id)
console.log(rest)
