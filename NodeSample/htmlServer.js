var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer((req,res)=>
{
    var q=url.parse(req.url) //to parse the url path only..avoid the unnecessary symbols after required path

    if(q.pathname==='/') {
            res.write('Hy Hello')
            res.end()
    }
    else if(q.pathname==='/signup')
    {
        fs.readFile('sampleServer.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==='/signupaction')
    {
        res.write('Action')
        res.end()
    }
    else
    {
        res.write('Error')
        res.end()
    }

}).listen(7000,()=>console.log('Server Started'))
