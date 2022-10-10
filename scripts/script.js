let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')

let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
   }else{
        window.alert('Valor inválido ou já encontrado na lista.')
   }

   num.value = ''
   num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {

            soma += valores[i]

           if(valores[i] > maior){
                maior = valores[i]
           }
           if(valores[i] < menor){
            menor = valores[i]
       }

        }

        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>${total} números adicionados.</p>`
        resultado.innerHTML += `<p>Maior valor ${maior}.</p>`
        resultado.innerHTML += `<p>Menor valor ${menor}.</p>`
        resultado.innerHTML += `<p>Soma de todos os valores ${soma}.</p>`
        resultado.innerHTML += `<p>Media dos valores ${media}.</p>`
    }
}