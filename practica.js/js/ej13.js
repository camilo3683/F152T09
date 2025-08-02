const inventario = {
manzanas: 50,
bananas: 30,
naranjas: 25,
peras: 15,
uvas: 40
};
for (let producto in inventario)
{
console.log(`${producto}:
 ${inventario[producto]}`); }