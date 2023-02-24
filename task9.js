const http=require('http');
const routes=require("./routes");

const server=http.createServer((routes));
            



    
 
     

    // console.log(req.method,req.headers,req.url);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>')
    // res.write(' <head><title>page 1</title><!head>  ');
    // res.write(` <body>   <h1>welcome ${a}</he> <!body>`)

    // res.write('<!html>')
    // res.end()

server.listen(4000);