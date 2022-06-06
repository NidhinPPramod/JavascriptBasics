const numArray = [10,20,40,30];

//Sort function takes 2 args first value:a and next value:b for ascending a-b and for descending b-a and stores in an array

const sortedArrayasce=numArray.sort((a,b)=>{
    return a-b
})

const sortedArraydesc=numArray.sort((a,b)=>{
    return b-a
})
console.log(sortedArrayasce)
console.log(sortedArraydesc)

