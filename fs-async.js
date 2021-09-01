const {readFile,writeFile}=require('fs');     //const fs=require('fs');  fs.readFile('','',(err,result)=>{});
console.log('start');
readFile('./subfolder/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first=result;
  readFile('./subfolder/test.txt','utf8',(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second=result;
    writeFile(
      './subfolder/result-async.txt',
      `The result is ${first}, ${second} `,
      (err,result)=>{
        if(err){
          console.log(err);
          return;
        }else{
          // console.log(result);
          console.log('done');
        }
      }
    );
  });
});

console.log('start again');