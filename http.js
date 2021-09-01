const http =require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('Welcome By');
  }else if(req.url==='/about'){
    res.end('Welcome to About');
  }else{
  // res.write('Welcome');
  // res.end();
  res.end(`
  <h1> Oops</h1>
  <p>about is not present</p>
  <a href="/">back home</a>`);
  }
});

server.listen(5000);