window.addEventListener("load", ()=>{  //Escuchamos cuando se carga el documento //
    
    // Cree dos constantes y nos guardamos los elementos que necesitamos//
    const display =document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

    // cree otra constante para convertir el HTMLCollection a Array //
    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => {
        // A cada boton le agregue un listener //
        button.addEventListener("click", () => {
            calculadora(button, display)
        })
    })
}) 

function calculadora(button, display) {
    switch (button.innerHTML) {
        case "C":
            borrar(display);
            break;
        case "=":
            calcular(display);
            break;
            
        default:
            actualizar(display, button)
            break;    
    }
}

function calcular (display) {
   display.innerHTML = eval(display.innerHTML) // Toma el string y lo resuelve // 
}

function actualizar (display, button) {
    if (display.innerHTML ==0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0; 
} 