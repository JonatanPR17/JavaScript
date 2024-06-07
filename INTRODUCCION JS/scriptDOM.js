
function cambiarTexto(){
    /*Hemos accedido al document y hemos buscado el elemento que tenga el id "elotroh1*/
    /*Ese elemento lo hemos guardado en una variable que se llama "titulo*/
    let title = document.getElementById("elotroh1")

    if(title.innerHTML == "Estoy cambiando de titulo"){
        /*En el elemento hemos accedido a la propiedad innerHTML y hemos cambiado su valor */
        title.innerHTML = "Hola soy otro H1"
    }else{
        title.innerHTML = "Estoy cambiando de titulo"
    }
}