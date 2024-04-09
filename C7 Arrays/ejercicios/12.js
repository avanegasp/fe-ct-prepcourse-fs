function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  if (array.length === 0) {
    return [];
}

return array.map(function(elemento) {
    return elemento.toUpperCase();
});
}

convertirStringAMayusculas(["hola", "mundo", "soy", "Angie"])

module.exports = convertirStringAMayusculas;
