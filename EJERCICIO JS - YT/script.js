/*Funcion con las cuatro operaciones basicas con Switch*/

function ejercicioUno(a,b,operation){
    switch (operation) {
        case "suma":
            return console.log(a + b)
        case "resta":
            return console.log(a - b)
        case "multiplicacion":
            return console.log(a * b)
        case "division":
            return console.log(a / b)        
        default:
            return console.error(`La operacion ${operation} no es valida`)
    }
}
ejercicioUno(12,5,"suma")

/*Impresion de los valores pares de "a" hasta "b"*/

function ejercicioDos(a,b){
    let nums = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0)
            nums.push(i)
    }
    console.log(nums)
}
ejercicioDos(1,21)

/*Tabla de multiplicaicon de 0 al x menos la tabla del 5*/

function ejercicioTres(a = 0,x = 12){
    let results = [];
    for (let i = 0; i <= x; i++){
        results = a * i
        if(i!==5)
            console.log(`${a} X ${i} = ${results}`)
    }
}
ejercicioTres(1,9)

/*Funcion que filtre multiplos de 3 del 1 al 100*/

function ejercicioCuatro(){
    let nums = []
    let multiplos = []
    for (let i = 0; i <= 100; i++){
        nums.push(i)
    }
    console.log(`Este es el arreglo principal ${nums}`)
    nums.filter((el) =>{
        if (el % 3 === 0)
            multiplos.push(el)
    })
    console.log(multiplos)
}
ejercicioCuatro()

/*Hacer una función que haga de forma aleatoria un número entre 1 y 1000,
y que a ese número le saqué su mitad, el doble y su raíz cuadrada.*/

function ejercicioCinco(){
    let num = Math.floor(Math.random() * (1000 - 1)+1)
    let mitad = num / 2
    let doble = num * 2
    let raiz = Math.sqrt(num)
    console.log(`El numero es ${num}, la mitad es ${mitad}, el doble es ${doble} y la raiz cuadrada es ${raiz}`)
}
ejercicioCinco()

/*Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños,
nos diga cuantos días faltan para el mismo.*/

function ejercicioSeis(a = "17 may 2024") {
    let cumple = new Date(a)
    let hoy = new Date()
    let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24))
    console.log(`Tu cumpleanios es el ${cumple} y faltan ${diasRestantes} dias`)
}
ejercicioSeis()

/*Realizar una función que, dado como dato de entrada una oración, nos devuelva un arreglo que
contenga todas las palabras usadas en la oración.*/

function ejercicioSiete(text = "Hola mundo"){
    let words = text.split(" ")
    console.log(words)
}
ejercicioSiete("Jonatan Paitan")

/*Crea 5 objetos y almacénalos en un arreglo, debes hacer una función para filtrar a todas las
personas que tengan el nombre Luis y que esa misma función también muestre cuales son mayores de edad.*/

function ejercicioOcho(){
    const personas = [
        {
            nombre: "Luis",
            apellido: "Rivera",
            edad: 20
        },
        {
            nombre: "Luis",
            apellido: "Santos",
            edad: 12
        },
        {
            nombre: "Luis",
            apellido: "Jeremias",
            edad: 2
        },
        {
            nombre: "Jorge",
            apellido: "Revolo",
            edad: 23
        },
        {
            nombre: "J",
            apellido: "Alvarez",
            edad: 20
        }
    ]
    console.log(personas)
    console.log("Personas que se llaman Luis")
    personas.filter((el) => {
        if(el.nombre === "Luis" )
            console.log(`${el.nombre} ${el.apellido}`)
    })
    console.log("Personas mayores de edad")
    personas.filter((el) => {
        if(el.edad >=18)
            console.log(`${el.nombre} ${el.apellido} tiene ${el.edad} anios`)
    })
}
ejercicioOcho()

/*Realizar una función que nos diga la fecha de apertura de un examen de la universidad,
es decir, la cantidad de horas restantes que faltan para que abra dicho examen. En caso
de que el examen haya cerrado que nos retorne un mensaje que diga “El examen ya cerró”.*/

function ejercicioNueve(open = "", close = ""){
    if(open === "" || close === ""){
        return console.error("Faltan parametros");
    } else {
        let today = new Date();
        let testOpen = new Date(open);
        let testClose = new Date(close);
        
        let resultTimeOpen = Math.floor((testClose.getTime() - testOpen.getTime()) / (1000 * 60));
        let resultTimeRest = Math.floor((testOpen.getTime() - today.getTime()) / (1000 * 60));
        let resultTimeClose = Math.floor((testClose.getTime() - today.getTime()) / (1000 * 60));

        if(testClose.getTime() < today.getTime()) {
            return console.log("El examen ya cerro");
        } else {
            if (resultTimeRest > 0) {
                console.log(`Faltan ${resultTimeRest} minutos para que el examen abra`);
            } else {
                console.log("El examen esta abierto");
                console.log(`El examen durara abierto ${resultTimeOpen} minutos`);
                console.log(`Faltan ${resultTimeClose} minutos para que el examen cierre`);
            }
        }
    }
}

ejercicioNueve('Wed May 15 2024 13:00:00' , 'Wed May 15 2024 13:55:00');

/*En un arreglo tenemos varios valores numéricos, debemos de hacer una función que nos
/elimine aquellos valores que se encuentran repetidos.*/

function ejercicioDiez(){
    const nums = [1,2,3,4,5,6,4,2,3];
    let result = nums.filter((item, index)=>{
        return nums.indexOf(item) === index
    })
    console.log(`Arreglo original: ${nums}`);
    console.log(result)
    //Segnda form
    let newNums = new Set(nums);
    console.log(newNums)
    let result2 = [...arguments, ...newNums];
    console.log(result2);
}

ejercicioDiez();