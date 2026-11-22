let inventario = [
    { Nombre: "Camisa", Precio: 20, Stock: 10 },
    { Nombre: "Pantalon", Precio: 35, Stock: 5 },
    { Nombre: "Zapatos", Precio: 50, Stock: 0 }
];

function venderProducto(arreglo, nombre, cantidad) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].Nombre === nombre) {
            if (arreglo[i].Stock >= cantidad) {
                arreglo[i].Stock = arreglo[i].Stock - cantidad;
                return "Venta exitosa";
            } else {
                return "Stock insuficiente";
            }
        }
    }
    return "Producto no encontrado";
}

console.log(venderProducto(inventario, "Camisa", 3));  // Venta exitosa
console.log(venderProducto(inventario, "Zapatos", 1)); // Stock insuficiente

// Función de inflación usando su mismo estilo con forEach
function aplicarInflacion(arreglo) {
    arreglo.forEach(producto => {
        producto.Precio = producto.Precio * 1.10;
    });
}

aplicarInflacion(inventario);

console.log("--- Inventario actualizado ---");
// Uso console.table para que se vea bonito, como a él le gusta
console.table(inventario); 