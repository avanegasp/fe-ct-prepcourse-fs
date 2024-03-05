function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:

  const combinados = nombre + " " + apellido
  return combinados
}

combinarNombres("Soy", "Henry")

module.exports = combinarNombres;
