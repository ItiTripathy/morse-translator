import { isValidChar, isValidMorse, toMorse, toEnglish } from "./translate.js";

const textInputEnglish = document.getElementById("englishInput");
const btnSubmitEnglish = document.getElementById("btnSubmitEnglish");
const btnClearEnglish = document.getElementById("btnClearEnglish");

const textInputMorse = document.getElementById("morseInput");
const btnSubmitMorse = document.getElementById("btnSubmitMorse");
const btnClearMorse = document.getElementById("btnClearMorse");

btnClearEnglish.addEventListener("click", () => {
    textInputEnglish.value = "";
});

btnClearMorse.addEventListener("click", () => {
    textInputMorse.value = "";
});

btnSubmitEnglish.addEventListener("click", () => {
    if (isValidChar(textInputEnglish.value)) {
        return alert(
            "Error: Invalid Morse Code character. Please refer to the Morse Code Guide."
        );
    }
    textInputMorse.value = toMorse(textInputEnglish.value);
});

btnSubmitMorse.addEventListener("click", () => {
    if (isValidMorse(textInputMorse.value)) {
        return alert(
            "Error: Invalid character.Please enter only dots & dashes. Please refer to the Morse Code Guide."
        );
    }
    textInputEnglish.value = toEnglish(textInputMorse.value);
});
