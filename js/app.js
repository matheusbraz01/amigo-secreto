let pessoas = [];

function adicionar (){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    pessoas.push(amigo.value);
    if(lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value; 
    }
    amigo.value = '';
} 

function sortear () {
    embaralhar(pessoas); 
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < pessoas.length; i++) {

        if (i == pessoas.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + pessoas[i] + '-->' + pessoas[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + pessoas[i] + '-->' + pessoas[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    pessoas = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    
}