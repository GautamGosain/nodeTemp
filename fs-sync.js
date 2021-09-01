const {readFileSync,writeFileSync}=require('fs');       //synchronus -> blocking

// const fs=require('fs');
//const first=fs.readFileSync('./subfolder/first.txt','utf8');
//const second=fs.readFileSync('./subfolder/second.txt','utf8');
//
console.log('start');

const first=readFileSync('./subfolder/first.txt','utf8');     //imp to provide utf8
const second=readFileSync('./subfolder/test.txt','utf8');

console.log(first,second);

writeFileSync(
  './subfolder/result-sync.txt',
  `The result is ${first}, ${second} `,
  {flag:'a'}
);

console.log('done');
console.log('start next one');



// line by line execution - synchronus - 1 user at a time