let carrito = [
    { Nombre: 'Jabon', Precio: 12, Cantidad: 10 },
    { Nombre: 'Azucar', Precio: 8, Cantidad: 10 },
    { Nombre: 'Aceite', Precio: 7, Cantidad: 10 }
];

function calcularTotal(arreglo) {
    let totalP = 0
    arreglo.forEach(arreglo => {
        totalP += arreglo.Cantidad * arreglo.Precio
        let totalPorP = arreglo.Cantidad * arreglo.Precio
        arreglo.Total = totalPorP
        console.table(arreglo)
    });

    console.log("Total a pagar: " + totalP)
};

calcularTotal(carrito)

function buscarProducto(arreglo, nombreProducto) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].Nombre === nombreProducto) {
            return "El producto " + arreglo[i].Nombre + " cuesta $" + arreglo[i].Precio;
        }
    }
    return "Producto no encontrado";
}

console.log(buscarProducto(carrito, "Jabon"));
console.log(buscarProducto(carrito, "Monitor"));