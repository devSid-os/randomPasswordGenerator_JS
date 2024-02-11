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

minusBtn.addEventListener("click", function() {
    if (passwordRange.value>8)
        passwordRange.value--;
    passwordLength.textContent = passwordRange.value;
});
plusBtn.addEventListener("click", function() {
    passwordRange.value++;
    passwordLength.textContent = passwordRange.value;
});

