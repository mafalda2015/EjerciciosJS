var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt('Introduce tu numero de DNI');
var letra = prompt('Introduce la letra de tu DNI')

if (numero< 0 || numero>99999999) {
    alert('numero incorrecto');
} 
else {
    var letrabuscada = letras(numero % 23)
    if(letrabuscada != letras)
    alert('la letra o el numero no son correctos');
}
else {
    alert('el numero y letra de tu DNI son correctos')
}
console.log('10905847Y', 10905847Y);

