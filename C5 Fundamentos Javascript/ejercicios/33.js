function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if(numero === 1){
    console.log(numero, "No es número primo")
    return false;
  }

  const numeroDos = 2
  const numeroImpar = numero % 2 !== 0
  const divisibleTres = numero % 3 > 0
  
  if(numero === numeroDos || numero === 3 || (numeroImpar && divisibleTres)){
    console.log(numero, "Es número primo");
    return true;
  }else{
    return false;
  }
}

esNumeroPrimo(10)

module.exports = esNumeroPrimo;
