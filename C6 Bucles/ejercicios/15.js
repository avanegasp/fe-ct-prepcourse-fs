function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

  const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

  if(numero === 0 || numero < -1){
    return "No es un dia de la semana"
  }

   if(numero < 8){
     return diaSemana[numero-1]
    }else {
     return "No es un dia de la semana"
   }
  }

obtenerDiaSemana(-2)

module.exports = obtenerDiaSemana;