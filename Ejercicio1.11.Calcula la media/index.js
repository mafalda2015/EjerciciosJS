const times = [60, 75, 79, 80, 55, 59]

const sumatotal = times.reduce((accumulator, currentValue) => accumulator + currentValue, 0) 
const media = sumatotal/times.length;

console.log('media', media);
