let agenda = [
    { Nombre: "Ana", Telefono: "555-1234", Correo: "ana@mail.com" },
    { Nombre: "Luis", Telefono: "555-5678", Correo: "luis@mail.com" },
    { Nombre: "Maria", Telefono: "555-9012", Correo: "maria@mail.com" },
    { Nombre: "Pedro", Telefono: "555-3456", Correo: "pedro@mail.com" }
];

// Función para mostrar todos usando forEach como en tu clase
function mostrarContactos(arreglo) {
    arreglo.forEach(contacto => {
        console.log("Nombre: " + contacto.Nombre + " - Tel: " + contacto.Telefono);
    });
}

mostrarContactos(agenda);

// Función de búsqueda
function buscarPorNombre(arreglo, nombre) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].Nombre === nombre) {
            return arreglo[i].Correo;
        }
    }
    return "Contacto no encontrado";
}

console.log(buscarPorNombre(agenda, "Maria")); // Devuelve el correo
console.log(buscarPorNombre(agenda, "Carlos")); // Contacto no encontrado