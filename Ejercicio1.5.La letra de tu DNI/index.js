var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt('Tu DNI');
console.log('dni', dni);

if (dni< 0 || dni>99999999) {
    alert('numero incorrecto');
} 
else {
    const letrabuscada = letras[dni%23];
    alert('tu letra DNI es' + letrabuscada);
};



