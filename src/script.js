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
const copyBtn = document.getElementById("copyBtn");

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

generateRandomPassword();

function generateRandomPassword() {
    var passwordString = "";
    const CAPITALS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const SMALLS = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const NUMBERS = '0123456789'.split('');
    const SYMBOLS = '~!#$%^&*()_+=`-|/?.<,>[}{]'.split('');
    var tempArr = [];
    var tempArr2 = [];
    if (capitalLettersCheck.checked) tempArr.push(0);
    if (smallLettersCheck.checked) tempArr.push(1);
    if (numbersCheck.checked) tempArr.push(2);
    if (symbolsCheck.checked) tempArr.push(3);

    tempArr.map(num => tempArr2.push(num));
    for (var i = 0; i < tempArr2.length; ++i) {
        var randomIndex = Math.floor(Math.random() * tempArr2.length);
        var temp = tempArr2[randomIndex];
        tempArr2[randomIndex] = tempArr2[i];
        tempArr2[i] = temp;
    }

    for (var i = 0; i < tempArr2.length; ++i) {
        switch (tempArr2[i]) {
            case 0:
                passwordString += CAPITALS[Math.floor(Math.random() * CAPITALS.length)];
                break;
            case 1:
                passwordString += SMALLS[Math.floor(Math.random() * SMALLS.length)];
                break;
            case 2:
                passwordString += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
                break;
            case 3:
                passwordString += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                break;
        }
    }

    while (passwordString.length != (parseInt(passwordRange.value))) {
        switch (tempArr[Math.floor(Math.random() * tempArr.length)]) {
            case 0:
                passwordString += CAPITALS[Math.floor(Math.random() * CAPITALS.length)];
                break;
            case 1:
                passwordString += SMALLS[Math.floor(Math.random() * SMALLS.length)];
                break;
            case 2:
                passwordString += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
                break;
            case 3:
                passwordString += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                break;
        }
    }
    randomPasswordInput.value = passwordString;
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
    if (passwordRange.value > 4) {
        passwordRange.value--;
        passwordLength.textContent = passwordRange.value;
        setPasswordLengthIndicator();
        generateRandomPassword();
    }
});

plusBtn.addEventListener("click", function () {
    if (passwordRange.value < 50) {
        passwordRange.value++;
        passwordLength.textContent = passwordRange.value;
        setPasswordLengthIndicator();
        generateRandomPassword();
    }
});

passwordRange.addEventListener("change", function () {
    passwordLength.textContent = passwordRange.value;
    setPasswordLengthIndicator();
    generateRandomPassword();
});

capitalLettersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('capital')) {
        e.target.checked = true;
    }
    else generateRandomPassword();
});
smallLettersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('small')) {
        e.target.checked = true;
    }
    else generateRandomPassword();
});
numbersCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('number')) {
        e.target.checked = true;
    }
    else generateRandomPassword();
});
symbolsCheck.addEventListener("click", (e) => {
    if (!validateCheckBoxes('symbol')) {
        e.target.checked = true;
    }
    else generateRandomPassword();
});
copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(randomPasswordInput.value);
});
refreshBtn.addEventListener("click", generateRandomPassword);