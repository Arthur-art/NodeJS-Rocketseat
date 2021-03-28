//Importando event emitter
const {EventEmitter} = require('events');
//instanciando EventEmitter
const eventEmitter = new EventEmitter();

//ouvindo um evento
eventEmitter.on('Emitindo um evento', (message)=>{
    console.log('O evento (Emitindo um evento) foi ouvido', message)
})
//emitindo um evento
eventEmitter.emit('Emitindo um evento', "!");
eventEmitter.emit('Emitindo um evento', "!");
eventEmitter.emit('Emitindo um evento', "!");
eventEmitter.emit('Emitindo um evento', "!");
eventEmitter.emit('Emitindo um evento', "!");
eventEmitter.emit('Emitindo um evento', "!");

//ouvindo um evento somente uma unica vez
eventEmitter.once('Emitindo somente um evento', (message)=>{
    console.log('O evento (Emitindo somente um evento) foi ouvido somente uma vez', message)
})
//emitindo um evento
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");
eventEmitter.emit('Emitindo somente um evento', "!");