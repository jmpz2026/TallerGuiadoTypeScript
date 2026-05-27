let precio: number = 1000;

const descuentoHoy = (precio: number): number => {
    return precio * 0.90;
}

console.log(`El decuento es de: ${descuentoHoy(precio)}`);