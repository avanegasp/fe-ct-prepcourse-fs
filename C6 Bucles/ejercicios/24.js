function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
     

let tex = texto.split('')
let reverso = tex.reverse()
let unir = reverso.join('')
 
if(texto === ""){

   }return unir

}

invertirTexto("hola")

module.exports = invertirTexto;
