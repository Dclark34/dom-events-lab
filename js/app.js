// GOALS

/*
1. Select numbers to perform operations
2. add two numbers together
3. subtract one number from another
4. multiply two numbers
5. divide one by another
6. see output
7. clear all operations and restart from 0.
*/





/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let num1;
let num2;
let operator;
let result;

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) =>{

    if (event.target.classList.contains("number")){
        if (!num2 && !operator) {
            num1 = eval(event.target.innerText);
            display.innerText = `${num1}`;
        }else if (num1 && operator){
            num2 = eval(event.target.innerText);
            display.innterText = `${num1}${operator}${num2}`;//Why won't it add the second number to the display? Hoisting issue?
        }
    }
    if (event.target.classList.contains("operator")){
        if (event.target.innerText === "C") {
            num1 = '';
            num2 = '';
            operator = '';
            result = '';
            display.innerText = '';
        }if (num1 && !num2){
            operator = event.target.innerText;
            display.innerText = `${num1}${operator}`;
        }
    }
    if (event.target.classList.contains("equals")){
        if (num1 && operator && num2){
            if (operator === "+"){
                result = num1 + num2;
            }if (operator === "-"){
                result = num1 - num2;
            }if (operator === "*"){
                result = num1 * num2;
            }if (operator === "/") {
                result = num1 / num2;
            }
            display.innerText = `${num1}${operator}${num2}=${result}`;
        }
    }
    });
});
// Want to add multi-digit (array push?) and remainder out of 100 (% ---> /100)
/*-------------------------------- Functions --------------------------------*/
