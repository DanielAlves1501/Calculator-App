const calcDisplay = document.getElementById("calc_display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const del = document.getElementById("delete");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const sum = document.getElementById("sum");
const subtract = document.getElementById("subtraction");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const dot = document.getElementById("dot");
let numero;
let operandoA;
let operandoB;
let operacion;

cero.addEventListener("click",()=>{
    numero = cero.textContent;
    calcDisplay.textContent += numero;
})

one.addEventListener("click",()=>{
    numero = one.textContent;
    calcDisplay.textContent += numero;
})

two.addEventListener("click",()=>{
    numero = two.textContent;
    calcDisplay.textContent += numero;
})

three.addEventListener("click",()=>{
    numero = three.textContent;
    calcDisplay.textContent += numero;
 
})

four.addEventListener("click",()=>{
    numero = four.textContent;
    calcDisplay.textContent += numero;
         
})

five.addEventListener("click",()=>{
    numero = five.textContent;
    calcDisplay.textContent += numero;
})

six.addEventListener("click",()=>{
    numero = six.textContent;
    calcDisplay.textContent += numero;
})

seven.addEventListener("click",()=>{
    numero = seven.textContent;
    calcDisplay.textContent += numero;
})

eight.addEventListener("click",()=>{
    numero = eight.textContent;
    calcDisplay.textContent += numero;

})

nine.addEventListener("click",()=>{
    numero = nine.textContent;
    calcDisplay.textContent += numero;
})

dot.addEventListener("click",()=>{
    numero = dot.textContent;
    calcDisplay.textContent += numero;
})

sum.addEventListener("click",()=>{
    operandoA = calcDisplay.textContent;
    operacion = sum.textContent;
    limpiar();
})

subtract.addEventListener("click",()=>{
    operandoA = calcDisplay.textContent;
    operacion = subtract.textContent;
    limpiar();
})

division.addEventListener("click",()=>{
    operandoA = calcDisplay.textContent;
    operacion = division.textContent;
    limpiar();
})

multiplication.addEventListener("click",()=>{
    operandoA = calcDisplay.textContent;
    operacion = multiplication.textContent;
    limpiar();
})

equal.addEventListener("click",()=>{
    operandoB = calcDisplay.textContent;
    resolver();
})

reset.addEventListener("click",resetear)

del.addEventListener("click",deleteNumber)

function limpiar(){
    calcDisplay.textContent = "";
}

function resetear(){
    calcDisplay.textContent = "";
    operandoA = "";
    operandoB = "";
    operacion = "";
}

function deleteNumber(){
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
}

function resolver(){
    let resultado;
    if(operacion == "+"){
        resultado = Number(operandoA) + Number(operandoB);
    } else if(operacion == "-"){
        resultado = Number(operandoA) - Number(operandoB);
    } else if(operacion == "x"){
        resultado = Number(operandoA) * Number(operandoB);
    } else if(operacion == "/"){
        resultado = Number(operandoA) / Number(operandoB);
    }
    resetear();
    calcDisplay.textContent = resultado;
}

// ----- ----- THEME SELECTION ----- -----

let rangeBar = document.getElementById("theme__bar");
let body = document.querySelector("body");
let calcTopContainer = document.querySelector(".calc_top_container");
let calcButtonsContainer = document.querySelector(".calc_buttons_container");
let buttons = document.querySelectorAll(".btn_theme1");
let darkButtons = document.querySelectorAll(".btnDark");

rangeBar.addEventListener("mousemove",(e)=>{
    if(rangeBar.value == 0){
        removeClass();
        body.classList.add("body_background_theme1");
        calcTopContainer.classList.add("calc_top_container_color_theme1");
        calcDisplay.classList.add("calc_display_background_theme1");
        calcButtonsContainer.classList.add("calc_buttons_container_background_theme1");
        buttons[0].classList.add("btn_theme1");
        buttons[1].classList.add("btn_theme1");
        buttons[2].classList.add("btn_theme1");
        buttons[3].classList.add("btn_theme1");
        buttons[4].classList.add("btn_theme1");
        buttons[5].classList.add("btn_theme1");
        buttons[6].classList.add("btn_theme1");
        buttons[7].classList.add("btn_theme1");
        buttons[8].classList.add("btn_theme1");
        buttons[9].classList.add("btn_theme1");
        buttons[10].classList.add("btn_theme1");
        buttons[11].classList.add("btn_theme1");
        buttons[12].classList.add("btn_theme1");
        buttons[13].classList.add("btn_theme1");
        buttons[14].classList.add("btn_theme1");
        darkButtons[0].classList.add("btn_dark_theme1");
        darkButtons[1].classList.add("btn_dark_theme1");
        equal.classList.add("equal_theme1");
    } 
    else if(rangeBar.value == 1){
        removeClass();
        body.classList.add("body_background_theme2");
        calcTopContainer.classList.add("calc_top_container_color_theme2");
        calcDisplay.classList.add("calc_display_background_theme2");
        calcButtonsContainer.classList.add("calc_buttons_container_background_theme2");
        buttons[0].classList.add("btn_theme2");
        buttons[1].classList.add("btn_theme2");
        buttons[2].classList.add("btn_theme2");
        buttons[3].classList.add("btn_theme2");
        buttons[4].classList.add("btn_theme2");
        buttons[5].classList.add("btn_theme2");
        buttons[6].classList.add("btn_theme2");
        buttons[7].classList.add("btn_theme2");
        buttons[8].classList.add("btn_theme2");
        buttons[9].classList.add("btn_theme2");
        buttons[10].classList.add("btn_theme2");
        buttons[11].classList.add("btn_theme2");
        buttons[12].classList.add("btn_theme2");
        buttons[13].classList.add("btn_theme2");
        buttons[14].classList.add("btn_theme2");
        darkButtons[0].classList.add("btn_dark_theme2");
        darkButtons[1].classList.add("btn_dark_theme2");
        equal.classList.add("equal_theme2");
    } 
    else if(rangeBar.value == 2){
        removeClass();
        body.classList.add("body_background_theme3");
        calcTopContainer.classList.add("calc_top_container_color_theme3");
        calcDisplay.classList.add("calc_display_background_theme3");
        calcButtonsContainer.classList.add("calc_buttons_container_background_theme3");
        buttons[0].classList.add("btn_theme3");
        buttons[1].classList.add("btn_theme3");
        buttons[2].classList.add("btn_theme3");
        buttons[3].classList.add("btn_theme3");
        buttons[4].classList.add("btn_theme3");
        buttons[5].classList.add("btn_theme3");
        buttons[6].classList.add("btn_theme3");
        buttons[7].classList.add("btn_theme3");
        buttons[8].classList.add("btn_theme3");
        buttons[9].classList.add("btn_theme3");
        buttons[10].classList.add("btn_theme3");
        buttons[11].classList.add("btn_theme3");
        buttons[12].classList.add("btn_theme3");
        buttons[13].classList.add("btn_theme3");
        buttons[14].classList.add("btn_theme3");
        darkButtons[0].classList.add("btn_dark_theme3");
        darkButtons[1].classList.add("btn_dark_theme3");
        equal.classList.add("equal_theme3");
    }
})

function removeClass(){
    body.classList.remove("body_background_theme1","body_background_theme2","body_background_theme3");
    calcTopContainer.classList.remove("calc_top_container_color_theme1","calc_top_container_color_theme2","calc_top_container_color_theme3");
    calcDisplay.classList.remove("calc_display_background_theme1","calc_display_background_theme2","calc_display_background_theme3");
    calcButtonsContainer.classList.remove("calc_buttons_container_background_theme1","calc_buttons_container_background_theme2","calc_buttons_container_background_theme3");
    buttons[0].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[1].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[2].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[3].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[4].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[5].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[6].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[7].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[8].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[9].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[10].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[11].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[12].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[13].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    buttons[14].classList.remove("btn_theme1","btn_theme2","btn_theme3");
    darkButtons[0].classList.remove("btn_dark_theme1","btn_dark_theme2","btn_dark_theme3");
    darkButtons[1].classList.remove("btn_dark_theme1","btn_dark_theme2","btn_dark_theme3");
    equal.classList.remove("equal_theme1","equal_theme2","equal_theme3");
}