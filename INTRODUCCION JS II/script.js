/*const tituto = document.getElementById("titulo-1")*/

//querySelector
const tituto = document.querySelector("#titulo-1")
tituto.innerHTML = "He cambiado el titulo"

//querySelectorAll
const containers = document.querySelectorAll(".container")
console.log(containers)

// //createElement
// /*Hemos creado una etiqueta h5 en JS */
// /*<h5> </h5>*/
// const h5 = document.createElement("h5")
// console.log(h5)


////////////////////////////////////
//appendChild
//const textoNodo = document.createTextNode("Hola soy un h5")
/*appenChild mete el elemento dentro de otro*/
//h5.appendChild(textoNodo)
/*He seleccionado el body*/
//const body = document.querySelector(".bg-yellow-500")
/*Insertar el h5 al body*/
//body.appendChild(h5)
//////////////////////////////////// 

//createElement
/*Hemos creado una etiqueta h5 en JS */
/*<h5> </h5>*/
const h5 = document.createElement("h5")
console.log(h5)

//appendChild
const textoNodo = document.createTextNode("Hola soy un h5")
/*appenChild mete el elemento dentro de otro*/
h5.appendChild(textoNodo)
/*He seleccionado el body*/
const body = document.querySelectorAll(".container")
/*Insertar el h5 al body*/
body[1].appendChild(h5)

//removeChild

function eliminarh5() {
    body[1].removeChild(h5)
}

function agregarh5() {
    /*Insertar el h5 al body*/
    body[1].appendChild(h5)
}

//getAttributeNames()
const h2 = document.querySelector(".text-2xl")
console.log(h2.getAttributeNames())

//removeAttribute
h2.removeAttribute("class")

//className: accede directamente al valor de class
/*.length: Sirve para contar*/
console.log(h2.classList.length)
/*.add: sirve para agregar*/
h2.classList.add("bg-red-500")
/*.remove: Sirve para eliminar*/
h2.classList.remove("font-semibold")
/*.replace: Sirve para cambiar una clase*/
h2.classList.replace("font-semibold","font-bold")

//classList: va a traer todos los elementos que tenemos un elemento en class

//Animar el DOM
/*Keyframes: Animaciones en un punto*/
const keyframes = [
    { transform: "translate(0, 0)" },
    { transform: "translate(200px, 0)" },
    { transform: "translate(200px, 200px)" },
    { transform: "translate(0, 200px)" }
  ];
  
  h2.animate(keyframes, 4000);