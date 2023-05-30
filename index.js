const http=require("http");
const port =8000;
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