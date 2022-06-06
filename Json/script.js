const User = [
    {
        id: 1,
        name: "Nidhin",
        company: "google",
    }
];

//JSON FILE denoted inside ` `
const strJson=`{ 
"id":0,
"name":"Debug"
"company":"Google"
}`

console.log(User)
console.log(strJson)//String type

//to receive backend value in this json format parse() used ie,JSON TO OBJECT CONVERSION

// const parsedJSON=JSON.parse(strJson)
// console.log(parsedJSON)

//OBJECT TO JSON stringify method

const stringyJSON=JSON.stringify(User)
console.log(stringyJSON)
