// Qual a quantidade total de Vitorias e Derrotas do Herói ?
let totalVitorias = 105
let totalDerotas = 0

let saldoRankeadas = calcularRank(totalVitorias, totalDerotas)
let nivel = classificar(saldoRankeadas)


console.log("O Herói tem um saldo de " + saldoRankeadas + " Rankeadas e está no nível " + nivel)

//Função para fazer o cacular o Saldo de Rankeadas
function calcularRank(vitorias, derotas){
    let calculo = vitorias - derotas
    return calculo
}

//Função para classificar o titulo do rank conforme o saldo de Rankedas
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