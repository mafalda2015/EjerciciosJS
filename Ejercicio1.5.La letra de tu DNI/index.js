const DNI = prompt('Cual es tu DNI');

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

console.log('DNI', DNI);

if (DNI< 0 || DNI>99999999) {
    alert("numero incorrecto");
} 
else {
    const letrabuscada, letras[DNI%23]
    if(letrabuscada != letras)
    alert('tu letra del DNI es', letrabuscada);
}

const numeros = [1,2,3,4,5,6,7,8,9];