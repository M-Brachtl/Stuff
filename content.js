// content.js
const combos = {
    "a": "а",
    "b": "б",
    "c": "ц",
    "d": "д",
    "e": "е",
    "f": "ф",
    "g": "г",
    "h": "г",
    "i": "и",
    "j": "й",
    "k": "к",
    "l": "л",
    "m": "м",
    "n": "н",
    "o": "о",
    "p": "п",
    "t": "т",
    "r": "р",
    "s": "с",
    "u": "у",
    "v": "в",
    "´": "ъ",  // Hard sign
    "y": "ы",
    "z": "з",
    "ž": "ж",
    "š": "ш",
    "č": "ч",
    "ś": "щ",
    "ě": "э",
    "ˇ": "ь",  // Soft sign
    "ú": "ю",
    "á": "я",
    "ó": "ё",
    "x": "х",
    "ů": "ў",  // Ukrainian and Belarusian Cyrillic
    "ý": "і",
    "q": "ґ",
    "é": "є",
    "í": "ї"
};

function convertToCyrillic(input) {
    const latinArray = input.split('');
    const russianArray = [];

    for (const char of latinArray) {
        try {
            if (char.toLowerCase() !== char) {
                russianArray.push(combos[char.toLowerCase()].toUpperCase());
            } else {
                russianArray.push(combos[char]);
            }
        } catch (error) {
            russianArray.push(char);
        }
        if (russianArray[russianArray.length - 1] === undefined) {
            russianArray[russianArray.length - 1] = char;
        }
    }

    return russianArray.join('');
}
