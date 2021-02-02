// Al hacer click sobre el boton 'Guardar' aparece un mensaje de alert

function savedata() {
    alert('datos guardados');
};


// Al hacer foco sobre input del nombre cambia de color
const inputnombre = document.querySelector(".name");

function changecolorfocus() {
    inputnombre.style.backgroundColor = '#0000ff';
};

function changecolornofocus() {
    inputnombre.style.backgroundColor = '#ffa500';
};

// Si la letra pulsada es vocal, el segundo input aparecera en rojo y si es una consonate en verde
const inputrandom = document.querySelector(".random");

function checkletter(event) {
    const currentletter = event.which;
    if (currentletter === 67 || currentletter === 102 || currentletter === 55 || currentletter === 202) {
        inputrandom.style.color = '#ff0000';   
    }   else{
        inputrandom.style.color = '#008000';
    }
};

