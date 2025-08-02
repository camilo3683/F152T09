let saldo = 1000; // Saldo inicial
let opcion = 0; // Variable para almacenar la opción del usuario
let operacion = [1,2,3,1,4]; // Variable para almacenar la operación realizada
let indeceOp= 0; // Variable para almacenar el índice de la operación realizada
do {
    console.log("n=== CAJERO AUTOMÁTICO ===n");
    console.log("1. consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. depositar dinero");
    console.log("4. Salir");
    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
        case 1:
            let ingreso = parseFloat(prompt("Ingrese la cantidad a depositar: "));
            if (ingreso > 0) {
                saldo += ingreso;
                operacion[indeceOp] = 1; // Registrar operación de ingreso
                indeceOp++;
                console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
            } else {
                console.log("Cantidad no válida.");
            }
            break;
        case 2:
            let retiro = parseFloat(prompt("Ingrese la cantidad a retirar: "));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                operacion[indeceOp] = 2; // Registrar operación de retiro
                indeceOp++;
                console.log(`Retiro exitoso. Nuevo saldo: ${saldo}`);
            } else {
                console.log("Cantidad no válida o insuficiente.");
            }
            break;
        case 3:
            console.log(`Saldo actual: ${saldo}`);
            break;
        case 4:
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción no válida.");
    }
}   while (opcion !== 4);
<footer>
     <p> camilo gaviria - F152t04
            <a href="../../index.html">Volver al índice</a>
        </p>
    </footer>