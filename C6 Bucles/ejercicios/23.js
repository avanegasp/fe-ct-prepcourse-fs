function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let aumenta = num;
  let contador = 0;
  
do{
  aumenta += 5
  contador ++
  
  } while(contador < 8);
  return aumenta

}

doWhile(2)

module.exports = doWhile;