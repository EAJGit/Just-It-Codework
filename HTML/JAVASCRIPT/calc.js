const screen = document.getElementById("screen");

function appendToScreen(input) {
    screen.value += input;
}



function clearScreen() {
    
        screen.value = "";
        
       

}

function calculate() {
   try {
screen.value = eval(screen.value);

}

catch(error) {
    screen.value = "ERROR"
}
}