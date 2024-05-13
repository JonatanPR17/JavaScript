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

//Destructuring
/*Es una sintaxis que permite trarer valores de un Array u objeto
se usa en mas objetos y listas*/
/*{}->OBJETO*/
/*[]->ARRAY*/

perrito =
    {
        name: "Rufus",
        raza: "Pequines",
        edad: 25
    }

perritos =[
{
    name: "Rufus",
    raza: "Pequines",
    edad: 25
},
{
    name:"Teresa",
    raza: "Fresa",
    edad: 20
}
]

/*PRIMERA FORMA DE DESTRUCTURAR*/
function imprimir ({name,edad}){
    console.log(name)
    console.log("La edad promedio de "+ name+ " es de "+edad+" anios")

}
imprimir(perritos[1])

/*SEGUNDA FORMA DE DESTRUCTURAR*/
function imprimir (perritos){
    const {name,edad} = perritos;
    console.log("La edad promedio de "+ name+ " es de "+edad+" anios")

}
imprimir(perritos[1])

//Funciones Anonimas
/*Llamados tambien callbacks son funciones que no tienen nombre*/
console.log (function (perrito){
    const {name,edad} = perrito;
    console.log("La edad promedio de "+ name+ " es de "+edad+" anios")
}(perrito))

//PRIMERA MANERA
/*function crearTexto(){
    const h1 = document.createElement("h1")
    h1.innerText = "Hola soy un titulo"

    const body = document.querySelector("body")
    body.append(h1)

}
const button = document.getElementById("boton")

button.addEventListener("click",crearTexto)*/

//SEGUNDA MANERA
/*const button = document.getElementById("boton")

button.addEventListener("click",function(){
    const h1 = document.createElement("h1")
    h1.innerText = "Hola soy un titulo"

    const body = document.querySelector("body")
    body.append(h1)
})*/

//Arrow Functions
/*Forma concisa de escribir funciones*/
const button = document.getElementById("boton")

button.addEventListener("click",()=>{
    const h1 = document.createElement("h1")
    h1.innerText = "Hola soy un titulo"

    const body = document.querySelector("body")
    body.append(h1)
})

const sumar = (a,b)=>{
    return a+b;
}
console.log(sumar(1,2))

/*La flecha equivale a las llaves mas la palabra return*/
const devolverObjetos = () => [
    {objeto1:"Juanito"},
    {objeto2:"Pepito"}
]
/* En muchas instrucciones llaves, cuando hay solo una instruccion sin llaves*/
const resta = (a,b) => a-b;
console.log(resta(8,5))

const imprimir2 = () => console.log("Imprimir Algo");
imprimir2()

/*Cuando es un parametro no es necesario el parentesis, cuando es mas si es necesario y cuando no hay paremetros el parentesis es vacio,*/
const imprimirUnNumero = a => console.log(a)
imprimirUnNumero(5)

//Template Literals
let nombre = "Pepito"
console.log(`Hola soy, ${nombre}`)

let nombre2 = "Pepito"
let booleano = false
console.log(`Hola soy, ${nombre2} ${booleano?" y soy verdadero" : " y soy falso como tu ex"}`)
