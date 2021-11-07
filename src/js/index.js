const maxNumImput = document.getElementById('maxInput');
const minNumImput = document.getElementById('minInput');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const answer = document.getElementById('answer');
let generatedNumbers = {};
let randomNum;
generateButton.addEventListener("click",  generateRandomNumber);
resetButton.addEventListener("click",  reset);

function generateRandomNumber()  {
    const max = +maxNumImput.value;
    const min = +minNumImput.value;
    switch (true) {
        case min > max:
            answer.innerHTML = 'Validation error (min element bigger than max element)';
            break; 
        case isNaN(max) || isNaN(min):
            answer.innerHTML = 'Validation error (min element or max element are not a number)';
            break;
        case Object.keys(generatedNumbers).length === max - min + 1:
            answer.innerHTML = 'Elements are over';
            generateButton.disabled = true;
            generateButton.style.opacity = 0.4;
            break;
        default:
            randomNum = retunRandomNumber(min, max); 
            if (!generatedNumbers[randomNum]) {
                answer.innerHTML = randomNum;
                generatedNumbers[randomNum] = true;
            }
            else { 
                randomNum = retunRandomNumber(min, max);
            }
            break;
    }

}
function retunRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function reset() {
    generatedNumbers = {};
    generateButton.disabled = false;
    generateButton.style.opacity = 1;
    maxNumImput.value = '';
    minNumImput.value = '';
    answer.innerHTML = '';
}
