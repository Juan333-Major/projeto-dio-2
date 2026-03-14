let ranking = calculo(50, 10)
let nivel = ""

if(ranking <= 10){
    nivel = "Ferro"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)

}else if(ranking <= 20){
    nivel = "Bronze"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)
    
}else if(ranking <= 50){
    nivel = "Prata"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)

}else if(ranking <= 80){
    nivel = "Ouro"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)

}else if(ranking <= 90){
    nivel = "Diamante"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)

}else if(ranking <= 100){
    nivel = "Lendário"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)

}else{
    nivel = "Imortal"
    console.log(`O Herói tem de vitórias ${ranking} e está no nível ${nivel}`)
}

function calculo(vitoria, derrota){
    let resultado = vitoria - derrota
    return resultado

}