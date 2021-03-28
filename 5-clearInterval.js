// clearInterval ira cancelar um setinterval
const timeOut = 2000;
const checking = ()=> console.log('checking')

let intervalSet = setInterval(checking, timeOut)
const clear = ()=> clearInterval(intervalSet);

setTimeout(clear, 5000)