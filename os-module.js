const os=require('os');
// info about current users
const user = os.userInfo();
console.log(user);

//system uptime in seconds

console.log(`${os.uptime()}`);

const currentOS={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOS);