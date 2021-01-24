const frase = prompt('Escribe una frase para averiguar si esta escrita en mayusculas o minusculas')

function informacion(cadena) {
  var Solucion = 'la cadena esta formada por';
      if(cadena == cadena.toUpperCase()){
        return 'solo mayuscula';
    }
    else if (cadena == cadena.toLowerCase()){
        return 'solo minusculas';
    } 
    else {
        return 'minusculas y mayusculas';
    }     
 }
