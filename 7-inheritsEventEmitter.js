const {inherits} = require('util');
const {EventEmitter} = require('events');

//const Character = (name)=> {this.name = name};

function Character(name){
    this.name=name;
}

//Herdando funcionalidades do eventEmitter para a funcao Character
inherits(Character, EventEmitter);

//Ja esta herdando on e once do eventEmitter
const user = new Character('Arthur');
user.on('Cadastrado', ()=>{
    console.log('Usuario Arthur foi cadastrado no sistema')
})

user.emit('Cadastrado')