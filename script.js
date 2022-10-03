const frutas = ["laranja", "limão", "uva"];

let listaFrutas = document.getElementsByTagName("li")

for (let tamanhoArray in frutas){
    listaFrutas[tamanhoArray].innerHTML = frutas[tamanhoArray]
}

let fruitNew = document.getElementById("fruit")
console.log(fruitNew.value)

const adicionaItem = () => {
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = fruitNew.value
}

console.log (fruitNew)









