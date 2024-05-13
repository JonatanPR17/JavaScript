// Array de objetos clientes
const clientes = [
    { nombre: 'Juan', apellido: 'Pérez' },
    { nombre: 'María', apellido: 'García' },
    { nombre: 'Pedro', apellido: 'Martínez' },
    { nombre: 'Laura', apellido: 'López' },
    { nombre: 'Carlos', apellido: 'Gómez' },
    { nombre: 'Ana', apellido: 'Díaz' },
    { nombre: 'Luis', apellido: 'Rodríguez' },
    { nombre: 'Sofía', apellido: 'Hernández' },
    { nombre: 'Javier', apellido: 'Sánchez' },
    { nombre: 'Elena', apellido: 'Pérez' },
    { nombre: 'David', apellido: 'Muñoz' },
    { nombre: 'Paula', apellido: 'Jiménez' },
    { nombre: 'Miguel', apellido: 'Álvarez' },
    { nombre: 'Marina', apellido: 'Torres' },
    { nombre: 'Diego', apellido: 'Ruiz' },
    // Puedes seguir añadiendo más clientes aquí
];

  
  // Función para llenar la tabla de clientes
  function llenarTablaClientes() {
    const tablaClientes = document.getElementById('tablaClientes');
    const tbody = tablaClientes.querySelector('tbody');
  
    // Vaciar tabla antes de llenarla de nuevo
    tbody.innerHTML = '';
  
    // Llenar la tabla con los clientes
    clientes.forEach(cliente => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2 px-4">${cliente.nombre}</td>
        <td class="py-2 px-4">${cliente.apellido}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Función para mostrar la tabla de resultados de búsqueda
  function mostrarResultadosBusqueda(resultados) {
    const tbody = document.getElementById('tablaResultadoBusqueda').querySelector('tbody');
  
    // Vaciar tabla antes de llenarla de nuevo
    tbody.innerHTML = '';
  
    // Llenar la tabla con los resultados de búsqueda solo si hay resultados
    if (resultados.length > 0) {
      resultados.forEach(resultado => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-2 px-4">${resultado.nombre}</td>
          <td class="py-2 px-4">${resultado.apellido}</td>
        `;
        tbody.appendChild(tr);
      });
    } else {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="py-2 px-4" colspan="2">No se encontraron resultados</td>`;
      tbody.appendChild(tr);
    }
  }
  
  // Función para manejar el evento de búsqueda
  function buscarClientes() {
    const busqueda = document.getElementById('buscarInput').value.trim();
    const resultados = clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.apellido.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    // Mostrar los resultados de búsqueda en la tabla de resultados
    mostrarResultadosBusqueda(resultados);
  }
  
  // Evento click para activar el buscador
  document.getElementById('buscarBtn').addEventListener('click', function() {
    llenarTablaClientes(); // Llenar la tabla de clientes antes de mostrar el campo de búsqueda
    document.getElementById('contenedorBusqueda').classList.remove('hidden');
  });
  
  // Evento de cambio en el campo de búsqueda
  document.getElementById('buscarInput').addEventListener('input', buscarClientes);
  
  // Llenar la tabla de clientes al cargar la página
  llenarTablaClientes();