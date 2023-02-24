const fs=require('fs');
const requestHandler=(req,res)=>{
    var method=req.method;
    var url=req.url;
    if(url === '/') {
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
    
    
        });}
}


module.exports=requestHandler;


    