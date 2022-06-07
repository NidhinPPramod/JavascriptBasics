//Asynchronous function like settimeout() and uncalled function will only execute after the stack is complete
//async fn are placed in web api and moved to queue and then using eventloop check whether the stack is complete or not
//then only these functions are place in stack

// setTimeout(()=>{
//     console.log("I will work after the stack is complete")
// },1000)
// console.log("Running 1")
// console.log("Running 2")



// console.log("Start")
// const data=()=>{
//     setTimeout(()=>{
//         return "Im an asynchronous fn"
//     },3000)
// }
// console.log(data)
// console.log("End")

//output
//Start
// [Function: data]
// End

//this is because the function call has already been taken to stack and at that time the function has nothing to return
//so comes to be undefined

//Callback :-another function triggers after the execution of a function
//Solution for this problem is CALLBACK

// console.log("Start")
// const data=(cbfn)=>{
//     setTimeout(()=>{
//        cbfn("Im an asynchronous function")
//     },3000)
// }
//
// data((value)=>{
//     console.log(value)
// })
//
// console.log("End")



