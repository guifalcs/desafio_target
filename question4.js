const faturamentoMensalPorEstado = [
    { estado: "SP", faturamento: 67836.43 },
    { estado: "RJ", faturamento: 36678.66 },
    { estado: "MG", faturamento: 29229.88 },
    { estado: "ES", faturamento: 27165.48 },
    { estado: "Outros", faturamento: 19849.53 }
]

function calcularPorcentagem(faturamentoMensalPorEstado){
    const faturamentototal = faturamentoMensalPorEstado.reduce((acc, obj) => acc + obj.faturamento, 0)

    const porcentagens = faturamentoMensalPorEstado.map(estado => ({
        estado: estado.estado,
        porcentagem: (estado.faturamento / faturamentototal) * 100
    }))

    return porcentagens
}

console.log(calcularPorcentagem(faturamentoMensalPorEstado))