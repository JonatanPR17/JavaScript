let contador = 0;

function conteo() {
    document.getElementById('counter').innerText = contador;
}

function incremento() {
    contador++;
    conteo();
}

function decremento() {
    if (contador > 0) {
        contador--;
        conteo();
    }
}

function reseteo() {
    contador = 0;
    conteo();
}