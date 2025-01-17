const sequencia = 'Gostaria muito de ser desenvolvedor na Target'

function inverterString(string){
    const caracteres = string.split("")
    let novaSequencia = []

    for (let i = caracteres.length - 1; i >= 0; i--) {
        novaSequencia.push(caracteres[i])
    }

    return novaSequencia.join("")
}

console.log(inverterString(sequencia))
