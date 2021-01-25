const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longermonths = months
    .filter(months => months.length > 7);
    .map(eachmonths => eachmonths.toUpperCase())

console.log('longermonts', longermonths);