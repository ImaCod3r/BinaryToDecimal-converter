const binInput = document.getElementById("bin");
const decOutput = document.getElementById("dec");

// Converts binary input to decimal number
function binToDec(bin){
    let dec = 0;
    let idx = 0;
    let digits = bin.split('').reverse().join('');

    for(let digit of digits){
        dec += Number(digit) * (2 ** idx)
        idx++;
    }

    return dec;
}

function handleDigits(e){
    const input = e.target;
    const value = input.value;
    const correctValue = value.replace(/[^01]/g,'');
    // verify the input to only accepts binary digits
    if(value !== correctValue){
        input.value = correctValue;
    }
    decOutput.value = binToDec(correctValue);
}

binInput.addEventListener("input", handleDigits);

// Copy the result to clipboard
const copyBtn = document.getElementById('copy-button');
copyBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    decOutput.select();
    document.execCommand('copy');
})