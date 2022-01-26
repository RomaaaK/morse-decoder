const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const phrase = []
    let encodedLetter
    let letter
    let partLetter
    
    for (let i = 0; i < expr.length / 10; i ++) {
        encodedLetter = expr.slice(i * 10, (i * 10) + 10)
        letter = []
 
        if (encodedLetter[0] === '*') {
            phrase.push(' ')
            continue
        }
 
        for (let y = 0; y < 5; y++) {
            partLetter = encodedLetter.slice(y * 2, (y * 2) + 2)
 
            if (partLetter == '10') {
                letter.push('.')
                continue
            }
 
            if (partLetter == '11') {
                letter.push('-')
            } 
        }
 
        phrase.push(MORSE_TABLE[letter.join('')])
    }
 
    return phrase.join('')
}

module.exports = {
    decode
}