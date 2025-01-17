const fibonnaci = (n) => {
    let sequence = [0,1]

    while (sequence[sequence.length - 1] < n) {
        let twoLastNumbers = sequence.slice(-2);
        sequence.push(twoLastNumbers[0] + twoLastNumbers[1]);
    }

    if(sequence.indexOf(n) < 0) return console.log("Valor não está na sequência");

    return console.log("Valor está na sequência") 
}

fibonnaci(21) //está na sequência
fibonnaci(22) //não está na sequência

