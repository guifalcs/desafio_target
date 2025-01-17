let faturamentoDiário = [200, 350, 1200, 800, 400, 100, 2000] //Vetor de exemplo

class CalculosFaturamento{
    constructor(faturamentoDiario){
        this.faturamentoDiario = faturamentoDiario
    }

    showMenorValor() {
        let menorValor = this.faturamentoDiario.reduce((menor, valor) => valor < menor && valor > 0 ? valor : menor, Infinity);
        return menorValor;
    }

    showMaiorValor() {
        let maiorValor = this.faturamentoDiario.reduce((maior, valor) => valor > maior ? valor : maior, 0);
        return maiorValor;
    }

    showDiasAcimaDaMedia(){
        const faturamentoTotal = faturamentoDiário.reduce((acc, valor) => acc + valor, 0)
        const media = faturamentoTotal / faturamentoDiário.length
        const diasAcimaDaMedia = this.faturamentoDiario.filter((valor) => valor > media)

        return diasAcimaDaMedia.length
    }
}

const resposta = new CalculosFaturamento(faturamentoDiário)

console.log(resposta.showMenorValor())
console.log(resposta.showMaiorValor())
console.log(resposta.showDiasAcimaDaMedia())
