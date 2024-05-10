
//ECMA script Modules

import { imprimir } from "./script-2.js"

imprimir("Juanito")

//Spread Operator

const numeros = [1,2,3]
const personas = [
    {
        nombre:"Pepito",
        edad:19,
        carrera:"Desarrollo de Sistemas"
    },
    {
        nombre:"Jorge",
        edad:25,
        carrera:"Diseño de modas"
    }
]

const persona={
    nombre:"Messi",
    edad:34,
    carrera:"Fulbo"
}
const numeroAgregado = 4

/*Metodo Push para agregar un numero a un array*/
// numeros.push(numeroAgregado)

/*Otra manera de unir arrays*/
const arrayPersonasAgregadas = [...personas,persona]
const arrayNumerosNuevo = [...numeros,numeroAgregado]

console.log(arrayPersonasAgregadas)

const numerosArrayfuncion = [5,7,8]

function imprimirNumeros(...numeros){
    numeros.forEach(n=>console.log(n))
}

imprimirNumeros (numerosArrayfuncion)


