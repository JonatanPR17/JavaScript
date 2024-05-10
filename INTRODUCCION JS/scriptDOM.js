
function cambiarTexto(){
    /*Hemos accedido al document y hemos buscado el elemento que tenga el id "elotroh1*/
    /*Ese elemento lo hemos guardado en una variable que se llama "titulo*/
    let titulo = document.getElementById("elotroh1")

    if(titulo.innerHTML == "Estoy cambiando de titulo"){
        /*En el elemento hemos accedido a la propiedad innerHTML y hemos cambiado su valor */
        titulo.innerHTML = "Hola soy otro H1"
    }else{
        titulo.innerHTML = "Estoy cambiando de titulo"
    }
}