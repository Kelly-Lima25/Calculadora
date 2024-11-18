
const resultado = document.querySelector('.resultado')

let estadoCalculadora = 'esperando'; 

function add(input) {
    if (estadoCalculadora === 'resultado' || estadoCalculadora === 'erro') {
        resultado.value = input;
        estadoCalculadora = 'esperando'; 
    } else {
        resultado.value += input; 
    }
}

function calcularResultado() {
    try {
        resultado.value = eval(resultado.value); 
        estadoCalculadora = 'resultado'; 
    } catch (error) {
        resultado.value = 'Error'; 
        estadoCalculadora = 'erro'; 
    }
}

function deleteResultado() {
    resultado.value = resultado.value.slice(0, -1);
}

function deleteUmporUm() {
    resultado.value = ""; 
    estadoCalculadora = 'esperando'; 
}


