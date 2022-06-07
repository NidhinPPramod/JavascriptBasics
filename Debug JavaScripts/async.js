const promise1=new Promise((resolve,reject)=>{
    resolve(["Java","JavaScript"])
})

// promise1.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err)
// })
// async function sameAsabove(){
//     const resolve=await promise1
//     console.log(resolve)
// }
// sameAsabove()

//In arrow function

// const sameAsAbove=async ()=>{
//     const resolve=await promise1
//     console.log(resolve)
// }
//
// sameAsAbove()

//Using try catch

const sameAsAbove=async ()=>{
    try {
        const resolve = await promise1
        console.log(resolve)
    }catch (error){
        console.log(error)
    }
}

sameAsAbove()
