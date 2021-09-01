// npm -global command, comes with node

// local dependancy -> npm i <packagename>

//global dependancy
// npm install -g <packageName>

//package.json - manifest (stores info about project)
//manual approach
// npm init (step by step, press enter to skip)
// npm init -y(everything default)

const _=require('lodash');

const items=[1,[2,[3,[4]]]];
console.log(items);
const newItems=_.flattenDeep(items);
console.log(newItems);