const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longermonths = months
.filter(months => months.length > 7);
months.map(eachmonths => eachmonths.toUpperCase());
    
console.log('longermonths', longermonths);

const numberofmonths = longermonths.length;
console.log('numberofmonths', numberofmonths)