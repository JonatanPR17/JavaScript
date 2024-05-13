
//ECMA script Modules

import { imprimir } from "./script-2.js"

imprimir("Juanito")

//Spread Operator

const numeros = [1,2,3]
const numeroAgregado = 4
const nuevoArrayNumero = [...numeros,numeroAgregado]

console.log(nuevoArrayNumero)

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
const persona = {
    nombre:"Messi",
    edad:34,
    carrera:"Fulbo"
}
const totalPersonas = [...personas,persona]

console.log(totalPersonas)

/*Metodo Push para agregar un numero a un array
numeros.push(numeroAgregado)
console.log(numeros)*/

/*Otra manera de unir arrays*/
const arrayPersonasAgregadas = [...personas,persona]
const arrayNumerosNuevo = [...numeros,numeroAgregado]

console.log(arrayNumerosNuevo)
console.log(arrayPersonasAgregadas)

const numerosArrayfuncion = [5,7,8]

function imprimirNumeros(...numeros){
    numeros.forEach(n=>console.log(n))
}

imprimirNumeros (numerosArrayfuncion)