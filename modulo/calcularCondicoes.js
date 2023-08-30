function calculadora(valor,codigo){
    let valor1=valor
    let codigo1=codigo
    let resultado
    switch (codigo1) {
        case "1":
            resultado=valor1-((valor1*8)/100)
            break
        case"2":
            resultado=valor1-((valor1*4)/100)
            break
        case"3":
            resultado=console.log('Duas vezes de: '+valor1/2)
            break
        case"4":
            resultado=console.log('Quatro vezes de: '+((valor1+((valor1*8)/100)))/4)
            break
        default:
            console.log('ERRO: Não foi possível calcular, revise a operação e tente novamente')
            break
    }
    if(resultado!=undefined)
        return resultado
    else
        return false
}
module.exports={
    calculadora
}