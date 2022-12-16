function fixLetter(letter: string) {
    const correction = letter
        .replace(/\s+/g, ' ')
        .replace(/([,.?!]{2,})/g, (_, $1) => $1[0])
        .replace(/([.?!])(\s)([A-z])/g,
            (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
        )
        .replace(/(santa claus)/gi, 'Santa Claus')
        .trim()
        .replace(/\s([,.?!])/g, '$1')
        .replace(/^([A-z])/g, (_, $1) => $1.toUpperCase())
        .replace(/([^.?!])($)/g, '$1.')

    return correction
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
