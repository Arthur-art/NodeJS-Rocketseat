//setTimeout roda uma funcao depois de X milissegundos

const timeOut = 3000;
const finishing = () => console.log('Done in 3 sec');
//ira rodar primeiro que o finishing 
const timer = setTimeout(finishing, timeOut)
//cancelando um Timeout
clearTimeout(timer)