//Escrevendo na saida do terminal 
//process.stdout.write("Hello World\n")
const questions = [
    "Nome",
    "Sobrenome",
    "Idade",
    "Pais",
    "Profissao",
]
const ask = (index = 0)=>{
        process.stdout.write("\n"+questions[index] + " > ")
};   
const response = [];
//Ouvindo events e executando a function abaixo assim que acontece uma entrada de dados
process.stdin.on("data", data=>{
    //Colocando o dado de escrito no cmd pra dentro do array response
    response.push(data.toString().trim())
    if(response.length < questions.length){
        ask(response.length)
    }else{
        console.log(response)
        process.exit()
    }
})

process.on('exit', ()=>{
    console.log(`
        Nome : ${response[0]}
        
        Sobrenome: ${response[1]}

        Idade: ${response[2]}
        
        Pais: ${response[3]}
        
        Profissao: ${response[4]}
        
    `)
})