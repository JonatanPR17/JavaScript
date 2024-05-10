/*
//Paradigma sincrono de programacion estructurada

let a = 0;
function evaluarNumero(i){
    if(i==0){
        console.log("El valor de la variable es 0")
    }
}
evaluarNumero(a);

//Paradigma de Programacion Orientado a Objetos(esto no existe en JS)

class persona{
    let nombre;
    let apellido;
}

//Paradigma de Programacion Funcional

function algo(){

}
algo()
*/


//Onjetos como Parametros  
/*Definir objeto*/
const persona = {
    nombre: "Juanito",
    apellido: "Alimana"
}

const perro = {
    nombre: "Stinky",
    apellido: "El perruno"
}

function imprimiendoPersona(objeto){
    let nombre = objeto.nombre
    console.log(objeto.apellido);

    const h1 = document.createElement("h1")
    h1.append(objeto.nombre)
    const divPersona = document.querySelector("#datos-persona")
    divPersona.append(h1)
}
imprimiendoPersona(persona)