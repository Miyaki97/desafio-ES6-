import {
    Cliente 
} from "./cliente.js"

import {
    Impuestos
} from "./impuesto.js"

const impuestosCliente1 = new Impuestos(2500, 2);
const cliente1 = new Cliente("Sergio", impuestosCliente1);



console.log(`Impuesto anual de ${cliente1.nombre}: ${cliente1.calcularImpuesto()}`);

// console.log(`El impuesto anual de ${cliente2.nombre}: ${impuestosCliente2}`)
// const impuestosCliente2 = new Impuestos (50000, 5000)
// const cliente2 = new Cliente("Marisol", "impuestosCliente2")
