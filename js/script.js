let nomes = [
	"Bitcoin",
	"Ethereum",
	"Polygon",
	"Polkadot",
	"Solana",
	"Near Protocol",
	"Astar",
	"Ergo",
	"Kaspa"
]

function pesquisarNome(){

	let nomePesquisa = document.getElementById('campoNome').value
	let intensLista = ''

	for(indice in nomes){
		let nome = nomes[indice]
		if( nomePesquisa == nome ){
			intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`
		}
	}

	document.getElementById('lista').innerHTML = intensLista

}

function carregarNomes(){

	let intensLista = ''
	for(indice in nomes){
		
		let nome = nomes[indice]

		intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`

		//alert(intensLista)
	}

	document.getElementById('lista').innerHTML = intensLista

}

function calcularMelhorPreco(){

	//validar campos
	let precoAlcool = document.getElementById('alcool').value
	let precoGasolina = document.getElementById('gasolina').value
  
	if( precoAlcool != "" ){
	  if( precoGasolina != "" ){
  
		/*Calcular se é melhor usar álcool ou gasolina
		  * se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
		  * senão é melhor utilizar álcool
		*/
		let resultado = precoAlcool / precoGasolina
		if( resultado >= 0.7 ){
		  //alert("Melhor utilizar gasolina")
		  document.getElementById('resultado').innerHTML = "Melhor comprar Bitcoin"
		}else{
		  //alert("Melhor utilizar alcool")
		  document.getElementById('resultado').innerHTML = "Melhor comprar Ethereum"
		}
  
	  }else{
		alert("Preencha o preço da Gasolina")
	  }
	}else{
	  alert("Preencha o preço do Álcool")
	}
  
  }