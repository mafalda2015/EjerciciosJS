// Al hacer click sobre el boton 'Guardar' aparece un mensaje de alert
const inputsave = document.querySelector(".save");

inputsave.addEventListener('click', saveData);
function saveData() {
    alert('datos guardados');
};

// Al hacer foco sobre input del nombre cambia de color
const inputName = document.querySelector(".name");

inputName.addEventListener('focus', changecolorfocus);
function changecolorfocus() {
    inputName.style.backgroundColor = '#0000ff';
};
inputName.addEventListener('focusout',changecolornofocus);
function changecolornofocus() {
    inputName.style.backgroundColor = '#ffa500';
};

// Si la letra pulsada es vocal, el segundo input aparecera en rojo y si es una consonate en verde
const inputRandom = document.querySelector(".Random");

inputRandom.addEventListener('keypress', checkletter);
function checkletter(event) {
    const currentletter = event.which;
    if (currentletter === 67 || currentletter === 102 || currentletter === 55 || currentletter === 202) {
        inputRandom.style.color = '#ff0000';   
    }   else{
        inputRandom.style.color = '#008000';
    }
};
