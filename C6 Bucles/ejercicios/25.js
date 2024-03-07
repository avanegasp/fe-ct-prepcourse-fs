function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   let tex = string.split('')
   let reverso = tex.reverse()
   let unir = reverso.join('')

   
   if(string === unir){
      return true
   }else{
      return false
   }
}

esPalindromo("ana")

module.exports = esPalindromo;
