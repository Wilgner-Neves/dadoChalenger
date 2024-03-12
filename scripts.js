let primeiroRandom = Math.floor(Math.random() * 6) + 1
let segundoRandom = Math.floor(Math.random() * 6) + 1

const imagens = document.getElementsByTagName('img')
let primeiraImagem = `dados-img/dice${primeiroRandom}.png`
let segundaImagem = `dados-img/dice${segundoRandom}.png`

imagens[0].setAttribute('src', primeiraImagem)
imagens[1].setAttribute('src', segundaImagem)

//
const h1 = document.querySelector('h1')
if (primeiroRandom > segundoRandom) {
    h1.innerText = 'Jogador 1 venceu!'
}
else if (segundoRandom > primeiroRandom) {
    h1.innerText = 'Jogador 2 venceu!'
}
else {
    h1.innerText = 'EMPATE!'
}