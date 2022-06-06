const numArray = [10,20,40,30];

//Reduce used to carry on calculations has 4 args in which first one is initial value total and value given at end of paranthesis

const newArray=numArray.reduce((total,value)=>{
return total+value
},0)

console.log(newArray)
