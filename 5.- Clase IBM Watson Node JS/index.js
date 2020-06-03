const readline = require("readline")
const { crearSession, deleteSession, sendMessage } = require("./watson")

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function simularWatson(){
    return new Promise(function(resolve, reject){
        terminal.question("¿Que responde watson?", function(res){
            resolve(res)
        })
    })
}


function ask(id_session){
    terminal.question("Tú : ", async function(res){
        if(res === "exit"){
            await deleteSession(id_session)
            terminal.close()
            return
        }
        let result = await sendMessage(res, id_session)
        let texts = result.result.output.generic
        console.log("Watson : ", texts)
        ask(id_session)
    })
}

// ask()

async function flujo(){
    let session = await crearSession()
    let id_session = session.result.session_id
    ask(id_session)
    // let result = await sendMessage("Hola", id_session)
    // let texts = result.result.output.generic
    // console.log(texts)
    // await deleteSession(id_session)
}

flujo()