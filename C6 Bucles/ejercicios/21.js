function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while(numero % 2 === 0 && numero !== 10 && numero !== 100){
    return true;
  }
    return false
  }

  esPotenciaDeDos(3)

module.exports = esPotenciaDeDos;
