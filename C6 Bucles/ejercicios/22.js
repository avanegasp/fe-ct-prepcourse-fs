function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

   let result = "";
   let combinarUno = 0;
   let combinarDos = 0;
   let combinarTres = 0;
 
   while (combinarUno < str1.length || combinarDos < str2.length || combinarTres < str3.length) {
     if (str1[combinarUno]) {
       result += str1[combinarUno];
       combinarUno++;
     }
     if (str2[combinarDos]) {
       result += str2[combinarDos];
       combinarDos++;
     }
     if (str3[combinarTres]) {
       result += str3[combinarTres];
       combinarTres++;
     }
   }
 
   return result;
}

combine("hola","123","h1")



module.exports = combine;
