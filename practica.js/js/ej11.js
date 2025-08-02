const estudiante = {
nombre: "Juan",
edad: 20,
curso: "JavaScript",
nota: 9.5};
for (let propiedad in estudiante)
    {
console.log(`${propiedad}: ${estudiante[propiedad]}`);
    } 