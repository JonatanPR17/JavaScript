/*Forma que se recomienda para definir variables en JS es con "Let"*/

let nombre = "Juanito"

// Impresion en consola
console.log(nombre)

//Mensaje de alerta
/*alert(nombre)*/

const PI = 3.1416
console.log(PI)

//FUNCIONES

/* vas op let:Scope
    Scope: local o global
    var: Scope local --- la variable existe hasta que muera una funcion o una clase
    let: Scope global --- la variable existe en todo el archivo
*/
    
/////////////////////////////////////////////////////////////
function saludar(){
    let nombreEmpresa = "Empresa de los Gladiolos IRL"
    console.log(nombreEmpresa)
}
saludar()

/////////////////////////////////////////////////////////////
function saludar2(){
    return "Hola mundo"
}

let resdultadOFuncion = saludar2()

console.log(resdultadOFuncion)

/////////////////////////////////////////////////////////////
function saludar3(){
    return function () {
        console.log("Hola desde la segunda funcion")
    }
}
/*()->En los primeros parentesis estoy llamando a la funcion saludar*/
/*()->En los siguientes parentesis estoy ejecutando a la funcion anonima*/
saludar3()()

//PARAMETROS

/*NaN: Not a Number -> No es un numero */
/*JavaScript:
    hay 3 tipos de variable
    - Cadenas: Strings, char, undefined, etc
    - Numericas: Integer, float, decimal, NaN, undefined, etc
    - Objeto: Arrays, Bolleans, Onjeto JS, undefined

    Undefined--> No esta definido
*/

function sumar(a,b){
    return a + b
}
console.log(sumar(5,7))

//OBJETOS

//Contenido del array numerico
let array = [1,2,3,4,5]

let objeto = {
    nombre: "Juanito",
    Apellido: "Alimana",
    Trabajo: "Con mucha mana",
    direccion:{
        ciudad: "Huancayo",
        departamento: "Al costado de mi vecino"
    },
    vivo: true,
    listadecomidasfavoritas: [
        'Arroz con pollo',
        "Pollo con arroz y ensalada"
    ],
    caminar: function caminar(){
        /*console.log("Estoy caminando")*/
        return "Estoy caminando"
    }
}
console.log(objeto)

//SHORTHAND PROPERTY NAMES

let nombrePepito = "Pepito"
let apellidoPepito = "El Grande"

let pepito = {
    /*nombrePepito: nombrePepito*/
    nombrePepito,
    apellidoPepito
}
console.log(pepito.nombrePepito)
console.log(pepito.apellidoPepito)

//////////////////////////////////////////
/*DOM - DOCUMENT OBJECT MODEL --- ES UN API*/
/*DOM --- OBJETO -> CLAVE Y VALOR
    TIENE MULTIPLIES ATRIBUTOS DONDE ACCEDER
    "TODO NODO ES ELEMENTO, PERO TODO ELEMENTO ES UN NODO"
    NODO --> ES TODO LO QUE ESTA EN EL CODIGO HTML
    ELEMENTO --> SOLO LAS ETIQUETAS HTML
    */
console.log(document)