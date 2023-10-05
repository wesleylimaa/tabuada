// Seleção dos elementos
const mutiplicationForn = document.querySelector ("#multiplication-form");
const numberInput = document.querySelector ("#number");
const mutiplicationInput = document.querySelector ("#multiplicator");
const mutiplicationTable = document.querySelector(".multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span")



//funções

const createTable = (number, multiplicatorNumber) => {
    mutiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
            </div>`;

    const parser = new DOMParser(); //objeto permite transformar uma string em html

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    mutiplicationTable.appendChild(row);


    }

    multiplicationTitle.innerText = number;

};



//eventos
mutiplicationForn.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +mutiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;
    createTable(multiplicationNumber, multiplicatorNumber);
})

