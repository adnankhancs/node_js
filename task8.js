const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    console.log(req.url);
    var method=req.method;
    var url=req.url;
    
    var a;
    if(url ==='/') {
        fs.readFile('massage.txt', function(err, data) {
            if(err) throw err;
               a = data.toString();
            
               // Printing the response array
               console.log(a);
               res.write('<html>')
               res.write(' <head><title>enter message</title><!head>  ');
               res.write(` <body>`);
               res.write(` <h1> ${a} <!h1>`);
               res.write(`<form action='/message' method='POST'><input type='text' name='message'>   <button type="submit">Send</button>   </form> <!body>`)
           
               res.write('<!html>') 
               return res.end();  
            
         });
        
          
    }
     
    if(url ==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);


        });
        req.on('end',(chunk)=>{
           const parseBody=Buffer.concat(body).toString();
           const mesg=parseBody.split('=')[1]
           console.log(parseBody); 
           console.log(mesg); 
           fs.writeFileSync('massage.txt',mesg);
           res.statusCode=302
           res.setHeader('Location','/')
           return res.end(); 


        });
            



    } 
 
     

    // console.log(req.method,req.headers,req.url);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>')
    // res.write(' <head><title>page 1</title><!head>  ');
    // res.write(` <body>   <h1>welcome ${a}</he> <!body>`)

    // res.write('<!html>')
    // res.end()
})
server.listen(4000);