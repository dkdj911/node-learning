const http=require("http");
const fs=require("fs");
const port =8000;
fs.readFile('info.txt','utf8',(err,data)=>{
    console.log(data);
})
fs.writeFile("demo.txt","this is demo text",(err,data)=>   {
    console.log(err);
})
const server=http.createServer((req,res)=>{
    res.statusCode=200; 
     res.setHeader("Content-type","text/html");
  if(req.url==="/"){
    res.end("<h1>Home page</h1>")
  }
  else if(req.url==="/about"){
    res.end("About us page")
  }
  else{
    res.end("Page not found")
  }
})
server.listen(port,()=>{
    console.log(`server is listeeing at ${port}` );
})