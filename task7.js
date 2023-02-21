const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    var a;
    if(req.url =='/home') 
     a='home'
    else if(req.url =='/about') 
     a='About Us Page' 
    else if(req.url =='/about') 
     a='my Node Js project' 

    // console.log(req.method,req.headers,req.url);
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write(' <head><title>page 1</title><!head>  ');
    res.write(` <body>   <h1>welcome ${a}</he> <!body>`)

    res.write('<!html>')
    res.end()



})
server.listen(4000);