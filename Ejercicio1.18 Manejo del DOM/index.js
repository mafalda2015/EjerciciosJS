// Numero de enlaces de la pagina.
const links = document.getElementsByTagName('a');

// Direccion a la enlaza el penultimo enlace.
const penultimate = links [links.length -1].href="https://www.esri.com/en-us/arcgis/products/arcgis-fordevelopers/overview";

// Numero de enlaces del tercer parrafo
const third = document.getElementsById('third paragraph');
const numberlinks = third.getElementsByTagName('a').lenght;

// Mostrar el primer resultado
const firstresult = document.querySelector('#number-links');
firstresult.innerHTML = 'En esta pagina hay ${links.lenght} enlaces';

// Crear un nodo para el segundo
const secondresult = document.createElement('p');
const contentsecondresult = document.createTextNode(penultimate);
secondresult.appendChild(contentsecondresult);

const resultparagraph = document.querySelector('.results');
resultparagraph.appendChild(secondresult);

// Mostrar el tercer resultado
const thirdresult = document.querySelector('#thrid-result');
thirdresult.innerHTML = 'En el tercer parrafo hay $ {numberlinks} enlaces';

