const arrayFrutas = ["manzxana", "pera","naranja", "platano", "kiwi"]

/*for (fruta of arrayFrutas){
    console.log(fruta)
}*/

/*foreach: recorre cada elemento del array y ejecuta una accion*/
arrayFrutas.forEach(fruta =>
    console.log(fruta)
);

const numeros = [1,2,3,4]
const numerosdobles=[]

numeros.forEach(numero =>{
    numerosdobles.push(numero*2)
});
console.log(numerosdobles)

/*map:Crea un numero array temporal*/
const alDoble = numeros.map(numero=>numero*2)
console.log(alDoble)

/*filter:crea un nuevo array con elementos del array que cumplan con una condicion especifica*/
const numerosMayoresA3 = numeros.filter(numero=>numero>3)
console.log(numerosMayoresA3)

/*concat:combina dos o mas array en un nuevo array*/
const personas1 = ["Juanito","Maria"]
const personas2 = ["Pedrito","Jorge"]

const personas = personas1.concat(personas2)
console.log(personas)