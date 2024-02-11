const randomPasswordInput = document.getElementById("randomPasswordInput");
const passwordLengthIndicator = document.getElementById("passwordLengthIndicator");
const refreshBtn = document.getElementById("refreshBtn");
const passwordLength = document.getElementById("passwordLength");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const passwordRange = document.getElementById("passwordRange");
const capitalLettersCheck = document.getElementById("capitalLetters");
const smallLettersCheck = document.getElementById("smallLetters");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

setPasswordLengthIndicator();

function setPasswordLengthIndicator() {
    if (parseInt(passwordRange.value) < 8) {
        passwordLengthIndicator.textContent = "Weak";
        passwordLengthIndicator.style = "background-color: #ffb370";
    }
    else if (parseInt(passwordRange.value) < 10) {
        passwordLengthIndicator.textContent = "Good";
        passwordLengthIndicator.style = "background-color: #ffddbf";
    }
    else if (parseInt(passwordRange.value) < 12) {
        passwordLengthIndicator.textContent = "Strong";
        passwordLengthIndicator.style = "background-color: #d5f2a5";
    }
    else {
        passwordLengthIndicator.textContent = "Very Strong";
        passwordLengthIndicator.style = "background-color: #9ae437";
    }

}

function validateCheckBoxes(checkBox) {
    switch (checkBox) {
        case 'capital':
            if (!smallLettersCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) return false;
            break;
        case 'small':
            if (!capitalLettersCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) return false;
            break;
        case 'number':
            if (!capitalLettersCheck.checked && !smallLettersCheck.checked && !symbolsCheck.checked) return false;
            break;
        case 'symbol':
            if (!capitalLettersCheck.checked && !smallLettersCheck.checked && !numbersCheck.checked) return false;
            break;
    }
    return true;
}

minusBtn.addEventListener("click", function () {
    if (passwordRange.value > 4)
        passwordRange.value--;
    passwordLength.textContent = passwordRange.value;
    setPasswordLengthIndicator();
});
plusBtn.addEventListener("click", function () {
    passwordRange.value++;
    passwordLength.textContent = passwordRange.value;
    setPasswordLengthIndicator();
});

passwordRange.addEventListener("change", function () {
    passwordLength.textContent = passwordRange.value;
    setPasswordLengthIndicator();
});

capitalLettersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('capital')) {
        e.target.checked = true;
    }
});
smallLettersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('small')) {
        e.target.checked = true;
    }
});
numbersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('number')) {
        e.target.checked = true;
    }
});
symbolsCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('symbol')) {
        e.target.checked = true;
    }
});