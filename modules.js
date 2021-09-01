
// console.log(process);    - process
// GLOBALS-globally declared variables eg-process,__dirname(may be different)
//MODULES
// every file is a module(by default)


const names=require('./name');
const saysHi=require('./utils')
require('./mind')

saysHi(names.peter);
saysHi(names.helen);
saysHi(names.helena);