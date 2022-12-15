// seleção de elementos 
const mesInput = document.querySelector("#salarioMensal");
const reajusteInput = document.querySelector("#reajuste");


const clearBtn = document.querySelector("#clear-btn");
const backBtn = document.querySelector("#back-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const calcReal = document.querySelector("#calc-btn");
const resultValidNumber = document.querySelector("#newSal span");



// funções 
function calcValid(salarioMensal, reajuste) {
    let validEx = salarioMensal * reajuste;

    return validEx;
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}

function cleanInputs() {
    mesInput.value = "";
    reajusteInput.value = "";
};

function validDigits(text) {
    return text.replace(/[^0-9,]/g, "");
}

// eventos

[mesInput, reajusteInput ].forEach((el) => {
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

calcReal.addEventListener("click", (e) => {
    e.preventDefault();
    const mes =+mesInput.value.replace(",",".");
    const reajuste =+reajusteInput.value.replace(",",".");
    // isso bloquea a próxima tela caso os valores não sejam preenchidos
    if (!mes || !reajuste) return;

    const resultValid = calcValid(mes, reajuste);
    
    resultValidNumber.innerText = "Novo salario: "+ resultValid +" %";

    showOrHideResults();
    });

    





    