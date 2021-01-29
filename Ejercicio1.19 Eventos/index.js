// Al hacer click sobre el boton 'Guardar' aparece un mensaje de alert
<button class = "save">Guardar</button>
document.querySelector("save").addEventListener("click", savedata);
function savedata() {
    alert('datos guardados');
};

// Al hacer foco sobre input del nombre cambia de color
const inputnombre = document.querySelector(".name");

inputnombre.addEventListener('focus', changecolorfocus);
function changecolorfocus() {
    inputnombre.style.backgroundcolor = '#0000ff';
};
inputnombre.addEventListener('focusout',changecolornofocus);
function changecolornofocus() {
    inputnombre.style.backgroundcolor = '#ffa500';
};

// Si la letra pulsada es vocal, el segundo input aparecera en rojo y si es una consonate en verde
const inputRandom = document.querySelector('Random');

inputRandom.addEventListener('keypress', checkletter);
function checkletter(event) {
    const currentletter = event.which;
    if (currentletter === 67 || currentletter === 102 || currentletter === 55 || currentletter === 202) {
        inputRandom.style.color = '#ff0000';   
    }   else{
        inputRandom.style.color = '#008000';
    }
};
