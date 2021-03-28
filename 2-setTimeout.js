//setTimeout roda uma funcao depois de X milissegundos

const timeOut = 3000;
const finishing = () => console.log('Done in 3 sec');
//2 argumentos, o primeiro referenciando a funcao, o segundo o tempo em milisegundos
setTimeout(finishing, timeOut)
//ira rodar primeiro que o finishing 
console.log(setTimeout(finishing, timeOut))