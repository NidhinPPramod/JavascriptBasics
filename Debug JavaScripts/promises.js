// //Promise is introduced to include processing from multiple api's or to avoid callback hell
//
// const getData=(num)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })
// }
// const getData1=(num)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })
// }
//
// getData(5).then((response)=>{
//     return getData1(response+5)
// }).then((response)=>{
//     console.log(response)
// })

const promise1=new Promise((resolve,reject)=>{
    resolve(["Java","JavaScript"])
})
const promise2=new Promise((resolve,reject)=>{
    // resolve(["react","Angular"])
    reject("Error occurs so use catch")
})

const allPromises=Promise.all([promise1,promise2]) //catch block works if any reject works

const allPromises1=Promise.allSettled([promise1,promise2]) //returns status and reason if reject works

allPromises.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})

allPromises1.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
