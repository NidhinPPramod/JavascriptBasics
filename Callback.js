// const dt=new Date()
//
// for(i=0;i<1000;i++)
// {
//     console.log('count')
// }
//
// const d=new Date() -dt
// console.log(d)

// const longTask=(millisec)=>{
//     let dt=new Date()
//     while((new Date()-dt)<=millisec)
//     {}
// }
//
// console.log('start')
// longTask(5000)
// console.log('end')

//CallBAck

const hey=(data)=>
{
    console.log(data)
}

const hello=(ho)=>{
    ho('hy data here')
}

hello(hey)
