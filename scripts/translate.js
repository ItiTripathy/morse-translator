import { morseToEnglish, englishToMorse } from "./morsecode.js";

export const isValidChar = (text) => {
    const validChar = text
        .toLowerCase()
        .split("")
        .map((ch) => englishToMorse[ch]);

    return validChar.includes(undefined);
};

export const isValidMorse = (text) => {
    const validMorse = text.split(" ").map((c) => morseToEnglish[c]);
    return validMorse.includes(undefined);
};

export const toMorse = (text) => {
    if (isValidChar(text)) {
        throw new Error(
            "Error: Invalid Morse Code character. Please refer to the Morse Code Guide."
        );
    }
    const morseArr = text
        .toLowerCase()
        .split("")
        .map((char) => englishToMorse[char])
        .join(" ");
    return morseArr;
};

export const toEnglish = (text) => {
    if (isValidMorse(text)) {
        throw new Error(
            "Error: Invalid character. Please enter only dots & dashes. Please refer to the Morse Code Guide."
        );
    }
    const englishArr = text
        .split(" ")
        .map((char) => morseToEnglish[char])
        .join("");
    return englishArr;
};
