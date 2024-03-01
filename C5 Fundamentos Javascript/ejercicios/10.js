function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if(Date.parse(fecha)){
    return true;
 }else{
    return false;
    }
}

console.log(esFechaValida(2008-13-10))

module.exports = esFechaValida;