document.addEventListener("DOMContentLoaded", function() {
    // Definición de una matriz de objetos 'perros'
    const perros = [
        { nombre: "Rex", raza: "Chihuahua", edad: 4, kg: 2.5 },
        { nombre: "Max", raza: "Pug", edad: 3, kg: 6 },
        { nombre: "Bella", raza: "Bulldog Francés", edad: 5, kg: 10 }
    ];

    // Obtención de referencias al contenedor de perros y al botón de alternar
    const perrosContainer = document.getElementById("perros");
    const toggleButton = document.getElementById("toggleButton");

    // Variable para rastrear si los perros están visibles o no
    let perrosVisible = false;

    // Agregar un evento de clic al botón de alternar
    toggleButton.addEventListener("click", function() {
        // Si los perros no están visibles, mostrarlos
        if (!perrosVisible) {
            perrosContainer.style.display = "flex"; // Mostrar perros
            toggleButton.textContent = "Ocultar Perros"; // Cambiar texto del botón
        } else {
            // Si los perros están visibles, ocultarlos
            perrosContainer.style.display = "none"; // Ocultar perros
            toggleButton.textContent = "Mostrar Perros"; // Cambiar texto del botón
        }
        // Invertir el estado de visibilidad
        perrosVisible = !perrosVisible;
    });

    // Ocultar los perros al principio
    perrosContainer.style.display = "none";

    // Iterar sobre la matriz de perros y agregar cada uno al contenedor
    perros.forEach(perro => {
        const perroDiv = document.createElement("div"); // Crear un elemento div para cada perro
        perroDiv.classList.add("bg-green-100", "p-4", "text-center", "w-64"); // Agregar clases CSS al div
        perroDiv.innerHTML = `
            <p class="text-lg">${perro.nombre}</p>
            <p>Raza: ${perro.raza}</p>
            <p>Edad: ${perro.edad} años</p>
            <p>Peso: ${perro.kg} kg</p>
        `; // Agregar contenido HTML al div
        perrosContainer.appendChild(perroDiv); // Agregar el div al contenedor de perros
    });
});


/*La función document.addEventListener("DOMContentLoaded", function() {...}) se ejecuta cuando el DOM ha sido completamente cargado, y contiene todo el código que necesita ejecutarse después de que la página se haya cargado.
Se define un array de objetos llamado perros, que contiene información sobre cada perro.
Se obtienen referencias al contenedor de perros y al botón de alternar.
Se establece una variable perrosVisible para rastrear si los perros están actualmente visibles o no.
Se agrega un evento de clic al botón de alternar. Cuando se hace clic en el botón, se verifica si los perros están visibles o no. Si no están visibles, se muestran y se cambia el texto del botón. Si ya están visibles, se ocultan y se cambia el texto del botón.
Al principio, los perros están ocultos (perrosContainer.style.display = "none";).
Se recorre la matriz de perros y se agrega cada perro al contenedor de perros como un div con la información del perro dentro de él.*/