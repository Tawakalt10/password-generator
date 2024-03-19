// DOm elements//

const answerEl = document.getElementById('answers');
const lengthEl= document.getElementById('length');
const uppercasesEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
   lower: getRandomLower,
   upper:getRandomHigher,
   number:getRandomNumber,
   symbol:getRandomSymbol

};

// Generate event
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercasesEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
  
    console.log(typeof  length)
    
    answerEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
        );
    
});
   
    
// Generate password function
function generatePassword(lower, upper, number, symbol, length){
//  1. Init password var
//  2. Filter out unchecked types
//  3. loop over lenth call generator function for each type
// 4. Add final password to thr passwor var and return

let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount:', typesCount);

  console.log(generatePassword(typesCount))
}


   
    
// Generate functions- http://www.net-comber.com/charset.html

function getRandomLower (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomHigher(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol (){
    const symbols = '!@#$%^&*(){}=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];
}


 

 