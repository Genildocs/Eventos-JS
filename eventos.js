const currentNumberWrap = document.getElementById('currentNumber')
var currentNumber = 0;

function decremento(){
    if(currentNumber === 0) return
    currentNumber = currentNumber - 1;
    currentNumberWrap.innerHTML = currentNumber;
    
}

function incremento(){
    currentNumber = currentNumber + 1;
    currentNumberWrap.innerHTML = currentNumber;
    
}


// EVENTO ADDEVENTLISTENER(Altera um text na pagina html)
document.getElementById("evento").addEventListener('click', function alteraTexto(){
    document.getElementById("evento").innerHTML = "Obrigado!"
} )

//EVENTO OBLUR(Muda a cor de input)
function mudarCor(){

    document.getElementById("nome").style.background = "red"
}

function voltaCor(){
    document.getElementById("nome").style.background = "white"
}

// EVENTO ONCHANGE 
function selecionarArtistas(){
    let artista = document.getElementById("artistas").value
    
    document.getElementById("resultado").innerHTML = `Artista selecionado: ${artista}`
    
}

//EVENTO MOUSEOVER (Altera o background de uma div)
document.getElementById("minha_div").addEventListener("mouseover", mouseEmCima)

document.getElementById("minha_div").addEventListener("mouseout", mouseFora)

function mouseEmCima(){
    document.getElementById("minha_div").style.background = 'red'
    document.getElementById("minha_div").style.fontSize="20px"
}

function mouseFora(){
    document.getElementById("minha_div").style.background ='aqua'
    
}
//EVENTO MOUSEOVER

