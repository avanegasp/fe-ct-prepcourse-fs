function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  const fechaNac = new Date(fechaNacimiento); // Convertimos la cadena de fecha a un objeto Date
  console.log('Esto es Date ' + fechaNac)
  
  const añoNacimiento = fechaNac.getFullYear();

  const fechaActual = new Date().getFullYear() 

  const mayorDeEdad = fechaActual - añoNacimiento

  if(mayorDeEdad > 18){
    return true;
  }else{
    return false
  }
}

esMayorDeEdad('1986-05-27')

module.exports = esMayorDeEdad;