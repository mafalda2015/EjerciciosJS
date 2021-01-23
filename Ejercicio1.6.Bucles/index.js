const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]

// Con un bucle for
let acc = 0
for (let i = 0; i < notas.length; i++) {
    acc += notas[i];
};
console.log('con el bucle for la suma total es' + acc);

// Con un bucle for...of
let sumatotal
for (let i = 0; i < notas.length; i++) {
    sumatotal += notas[i];   
};
console.log('con el bucle for...of la suma total es' + sumatotal);