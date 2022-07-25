import { isValidChar, isValidMorse, toMorse, toEnglish } from "./translate.js";

const invalidMorseCharErr = new Error(
    "Error: Invalid Morse Code character. Please refer to the Morse Code Guide."
);

const invalidMorseCodeErr = new Error(
    "Error: Invalid character. Please enter only dots & dashes. Please refer to the Morse Code Guide."
);

describe("Test cases for the function isValidChar() which checks if the input text in english contains any invalid morse code character", () => {
    it("should return true for input with invalid character", () => {
        expect(isValidChar("$value")).toBe(true);
        expect(isValidChar("ampersand&")).toBe(true);
    });

    it("should return false for input with valid character", () => {
        expect(isValidChar("value")).toBe(false);
        expect(isValidChar("hello!")).toBe(false);
    });
});

describe("Test cases for the function isValidMorse() which checks if the input text in morse are valid or not", () => {
    it("should return true for a character that doesn't exist in morse code", () => {
        expect(isValidMorse("......")).toBe(true);
        expect(isValidMorse("------")).toBe(true);
    });

    it("should return false for characters that exist in morse code", () => {
        expect(isValidMorse(".... . .-.. .-.. ---")).toBe(false);
        expect(isValidMorse(".-- --- .-. .-.. -.. -.-.--")).toBe(false);
    });
});

describe("Test cases for the fuction toMorse() which returns the translation of english input to morse code if the input is valid or else throws an error", () => {
    it("should translate a valid English input", () => {
        expect(toMorse("hello")).toBe(".... . .-.. .-.. ---");
        expect(toMorse("world!")).toBe(".-- --- .-. .-.. -.. -.-.--");
    });

    it("should convert words separated by space correctly", () => {
        expect(toMorse("hi there!")).toBe(".... .. / - .... . .-. . -.-.--");
        expect(toMorse("see you again soon.")).toBe(
            "... . . / -.-- --- ..- / .- --. .- .. -. / ... --- --- -. .-.-.-"
        );
    });

    it("should throw an error if the input text includes invalid morse characters", () => {
        expect(() => toMorse("$$hello$$")).toThrow(invalidMorseCharErr);
        expect(() => toMorse("(goodbye)")).toThrow(invalidMorseCharErr);
    });
});

describe("Test cases for the fuction toEnglish() which returns the translation of morse code input to english if the input is valid or else throws an error", () => {
    it("should translate a valid morse code input", () => {
        expect(toEnglish(".. - .. .-.. . -.- .... .-")).toBe("itilekha");
        expect(toEnglish("- .-. .. .--. .- - .... -.--")).toBe("tripathy");
    });

    it("should convert the / between morse characters into a space in english text", () => {
        expect(
            toEnglish(
                ".-- .... .- - .----. ... / -.-- --- ..- .-. / -. .- -- . / ..--.."
            )
        ).toBe("what's your name ?");
    });

    it("should throw an error if the input text has invalid morse characters", () => {
        expect(() => toEnglish("what's up?")).toThrow(invalidMorseCodeErr);
        expect(() => toEnglish("($$&&)")).toThrow(invalidMorseCodeErr);
    });
});
