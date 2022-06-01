var http=require('http')

http.createServer( (req,res)=>{
    res.write('Hy local here')
    res.end()
}).listen(7000)
