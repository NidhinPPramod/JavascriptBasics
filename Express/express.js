const express=require('express')
const path=require('path')

const app=express()

app.use((req,res,next)=>{ //app.use is a middleware
    console.log('get req sent') //next should be included else break at console log
    next()
})

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/signup',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'sample.html')) //next given to display end in adjacent app.use
    next()
})

app.use((req,res)=>{
    console.log('End')
})

app.post('/signup',(req,res)=>{
    res.send('Data collected')
})


app.listen(3000,()=>console.log('Server Started'))
