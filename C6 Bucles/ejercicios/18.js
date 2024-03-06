function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let numeros = 1;
  
  if(a <= 0){
    return 0
  }
  for (let i = a; i <= b; i++) {
    numeros *= i;
  }
  return numeros;
}

module.exports = productoEntreNúmeros;