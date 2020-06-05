
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaFantasmaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaFantasmaTempo = 1500
} else if (nivel === 'dificil') {
	//1000
	criaFantasmaTempo = 1000
}else if (nivel === 'brutal') {
	//750
	criaFantasmaTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaFantasma)
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica() {

	//remover mosquito anterior (caso exista)
	if(document.getElementById('fantasma')) {
		document.getElementById('fantasma').remove()
		if(vidas > 3){

			window.location.href = 'fim_de_jogo.html'
		} else{
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX= Math.floor(Math.random() * largura) - 90
	var posicaoY= Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// criar o elemento html

	var fantasma = document.createElement('img')
	fantasma.src = 'imagens/fantasma.png'
	fantasma.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	fantasma.style.left = posicaoX + 'px'
	fantasma.style.top = posicaoY + 'px'
	fantasma.style.position = 'absolute'
	fantasma.id = 'fantasma'
	fantasma.onclick = function() {
		this.remove()
	}

	document.body.appendChild(fantasma)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'fantasma1'

		case 1:
			return 'fantasma2'

		case 2: 
			return 'fantasma3'
	}
}


function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoa'

		case 1:
			return 'ladob'
	}
}
