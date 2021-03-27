const flag = require('./flags');
console.log(process.argv)
console.log(`${flag('--name')} ${flag('--greeting')}`)