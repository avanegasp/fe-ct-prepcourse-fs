function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  let stringLargo = ""
  
  for(let i=0; i < array.length; i++){
      if(array[i].length >= 5){
        stringLargo = array[i]
        return stringLargo
    }
  }
  return undefined
}

obtenerPrimerStringLargo("Holas")

module.exports = obtenerPrimerStringLargo;
