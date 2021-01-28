// Al hacer click sobre el boton 'Guardar' aparece un mensaje de alert
document.querySelector('.save').addEventListener("click", save);
function save() {
    alert('datos guardados');
};

// Al hacer foco sobre input del nombre cambia de color
const inputnombre = document.querySelector(".name");

function changecolorfocus() {
    inputnombre.style.backgroundcolor = '#0000ff';
}
function changecolornofocus() {
    inputnombre.style.backgroundcolor = '#ffa500';
}

// Si la letra pulsada es vocal, el segundo input aparecera en rojo y si es una consonate en verde
const inputRandom = document.querySelector(".Random");

function checkletter(event) {
    const currentletter = event.which;
    if (currentletter === 67 || currentletter === 102 || currentletter === 55 || currentletter === 202) {
        inputRandom.style.color = '#ff0000';   
    }   else{
        inputRandom.style.color = '#008000';
    }
};
