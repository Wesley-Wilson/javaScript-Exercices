// seleção dos elementos 
const yearInput = document.querySelector("#year");
const mounthInput = document.querySelector("#mounth");
const dayInput = document.querySelector("#day");

const clearBtn = document.querySelector("#clear-btn");
const backBtn = document.querySelector("#back-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const calcDay = document.querySelector("#calc-btn");
const dayNumber = document.querySelector("#day-number span");


// funções 
function calcDayFunction(year, mounth, day) {
    const dayEx = (year * 365 + mounth * 30 + day);

    return dayEx;
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}

function cleanInputs() {
    yearInput.value = "";
    mounthInput.value = "";
    dayInput.value = "";
};

function validDigits(text) {
    return text.replace(/[^0-9,]/g, "");
}

// eventos  

[yearInput, mounthInput, dayInput].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updateValue = validDigits(e.target.value);

        e.target.value = updateValue;
        });
});

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cleanInputs();
}); 

backBtn.addEventListener("click", () => {
    cleanInputs();
    showOrHideResults();
});

calcDay.addEventListener("click", (e) => {
    e.preventDefault();
    const year = +yearInput.value.replace(",", ".");
    const mounth = +mounthInput.value.replace(",",".");
    const day = +dayInput.value.replace(",",".");
    // isso bloquea a próxima tela caso os valores não sejam preenchidos
    //if (!year || !mounth || !day) return;

    const variDay = calcDayFunction(year, mounth, day);
    
    dayNumber.innerText = variDay +" dias";

    showOrHideResults();
    });


// tem que fazer o calculo para aparecer o resultado 

/*function idadeDias(){
    let anoUsuario = parseInt(document.getElementById("anoUsuario").value);
    let mesUsuario = parseInt(document.getElementById("mesUsuario").value);
    let diaUsuario = parseInt(document.getElementById("diaUsuario").value);
    let ano = 365;
    let mes = 30;
    let diaResultado = parseInt(anoUsuario * ano + mesUsuario * mes + diaUsuario);
    document.getElementById("diaResultado").innerHTML = "Dias: "+ diaResultado;
}

function limpar(){
    let limpo = "";
    document.getElementById("diaResultado").innerHTML = "Dias: "+limpo;
    
    let anoInput = document.querySelector("#anoUsuario");
    let mesInput = document.querySelector("#mesUsuario");
    let diaInput = document.querySelector("#diaUsuario");
    anoInput.value = "";
    mesInput.value = "";
    diaInput.value = "";

}*/


