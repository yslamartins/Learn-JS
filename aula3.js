const listaNotas = [10, 5, 8, 4, 5, 9]

function calculoMedia(lista){
    let soma = 0
    for (let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    const media = soma / lista.length
    console.log(media.toFixed(2))
}

calculoMedia(listaNotas)