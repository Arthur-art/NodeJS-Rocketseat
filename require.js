/*/require é uma maneira de voce chamar modulos que ja sao nativos do nodejs
 ou modulos que podemos criar ou instalar, o path é um modulo que ja existe dentro do node/*/
const path = require('path');
//importando conteudo do arquivo exports.js
const exportsJS = require('./exports')
console.log(exportsJS)

//nome base do arquivo
//console.log(path.basename(__filename))