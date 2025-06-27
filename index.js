// Qual a quantidade total de Vitorias e Derrotas do Herói ?
let totalVitorias = [105, 34, 74] 
let totalDerotas = [21, 6, 15]

for(let i =0;i <3;i++){
    let saldoVitorias = calcularRank(totalVitorias[i], totalDerotas[i])
    let nivel = classificar(saldoVitorias)


    console.log(`O Herói tem um saldo de ${saldoVitorias} Vitorias e está no nível ${nivel}`)
}
function calcularRank(vitorias, derotas){
    let calculo = vitorias - derotas
    return calculo
}

function classificar(Rank){
    let classificacao = ""
    if (Rank <= 10){
        classificacao = "Ferro"
    }
    else if(Rank >=11 && Rank <=20){
        classificacao = "Bronze"
    } 
    else if(Rank >=21 && Rank <=50){
        classificacao = "Prata"
    } 
    else if(Rank >=51 && Rank <=80){
        classificacao = "Ouro"
    } 
    else if(Rank >=81 && Rank <=90){
        classificacao = "Dimante"
    } 
    else if(Rank >=91 && Rank <=100){
        classificacao = "Lendário"
    } 
    else{
        classificacao = "Imortal"
    }

    return classificacao
}