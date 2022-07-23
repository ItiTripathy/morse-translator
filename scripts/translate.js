import { morseToEnglish, englishToMorse } from "./morsecode.js";

export const isValidChar = (text) => {
    const validChar = text
        .toLowerCase()
        .split("")
        .map((ch) => englishToMorse[ch]);
    return validChar;
};

export const isValidMorse = (text) => {
    const validMorse = text.split(" ").map((c) => morseToEnglish[c]);
    return validMorse;
};

export const toMorse = (text) => {
    const morseArr = text
        .toLowerCase()
        .split("")
        .map((char) => englishToMorse[char])
        .join(" ");
    return morseArr;
};

export const toEnglish = (text) => {
    const englishArr = text
        .split(" ")
        .map((char) => morseToEnglish[char])
        .join("");
    return englishArr;
};
