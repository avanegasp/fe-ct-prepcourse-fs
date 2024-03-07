function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let numeros = 0
  
   for(let i=1; i<=n; i++){ //
     numeros +=i
     if (numeros >= 100) break
   }
   return numeros
}

sumarHastaNConBreak(15)

module.exports = sumarHastaNConBreak;
