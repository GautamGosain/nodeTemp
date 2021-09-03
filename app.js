// npm -global command, comes with node

// local dependancy -> npm i <packagename>

//global dependancy
// npm install -g <packageName>

//package.json - manifest (stores info about project)
//manual approach
// npm init (step by step, press enter to skip)
// npm init -y(everything default)

// const _=require('lodash');

// const items=[1,[2,[3,[4]]]];
// console.log(items);
// const newItems=_.flattenDeep(items);
// console.log(newItems);
// console.log('hello world');

// const { Console } = require('console');
const fs=require('fs').promises;

// const util=require('util');
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const start=async()=>{
  try{
    const first =await fs.readFile('./subfolder/first.txt','utf8');
    const second =await fs.readFile('./subfolder/test.txt','utf8');
    await fs.writeFile('./subfolder/result.txt',`Awesome : ${first}  ${second}`)
    console.log(first);
    console.log(second);
  }catch(error){
    console.log(error);
  }
}  


start();

// const getText = (path)=>{
//   return new Promise((resolve,reject)=>{
//     fs.readFile(path,'utf8',(err,data)=>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data);
//       }
//     });
//   });
// }

// getText('./subfolder/first.txt')
//   .then((result)=>console.log(result))
//   .catch((err)=>console.log(err))