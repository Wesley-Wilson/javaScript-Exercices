// seleção de elementos 
const totalVoteInput = document.querySelector("#totalVote");
const validVoteInput = document.querySelector("#validVote");
const nullVoteInput = document.querySelector("#nullVote");
const whiteVoteInput = document.querySelector("#whiteVote");

const clearBtn = document.querySelector("#clear-btn");
const backBtn = document.querySelector("#back-btn");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const calcPercentual = document.querySelector("#calc-btn");
const resultValidNumber = document.querySelector("#valid-number span");
const resultNullNumber = document.querySelector("#null-number span");
const resultWhiteNumber = document.querySelector("#white-number span");


// funções 
function calcValid(totalVote, validVote) {
    let validEx = ((100 * validVote) / totalVote);

    return validEx;
}

function calcNull(totalVote, nullVote) {
    let nullEx = ((100 * nullVote) / totalVote);

    return nullEx;
}

function calcWhite(totalVote, whiteVote) {
    let whiteEx = ((100 * whiteVote) / totalVote);

    return whiteEx;
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}

function cleanInputs() {
    totalVoteInput.value = "";
    validVoteInput.value = "";
    whiteVoteInput.value = "";
    nullVoteInput.value = "";
};

function validDigits(text) {
    return text.replace(/[^0-9,]/g, "");
}

// eventos

[totalVoteInput, validVoteInput, nullVoteInput, nullVoteInput ].forEach((el) => {
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

calcPercentual.addEventListener("click", (e) => {
    e.preventDefault();
    const whiteVote =+whiteVoteInput.value.replace(",",".");
    const nullVote =+nullVoteInput.value.replace(",",".");
    const validVote =+validVoteInput.value.replace(",",".");
    const totalVote =+totalVoteInput.value.replace(",",".");
    // isso bloquea a próxima tela caso os valores não sejam preenchidos
    if (!whiteVote || !nullVote|| !validVote || !totalVote) return;

    const resultWhite = calcWhite(totalVote, whiteVote);
    const resultNull = calcNull(totalVote, nullVote);
    const resultValid = calcValid(totalVote, validVote);
    
    resultValidNumber.innerText = "Votos Válidos: "+ resultValid +" %";
    resultNullNumber.innerText = "Votos Nulos: "+ resultNull +" %";
    resultWhiteNumber.innerText = "Votos Brancos: "+ resultWhite +" %";

    showOrHideResults();
    });

    
