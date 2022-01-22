//////////////////////////////////////////////////////////////////
// Javascript Puzzle #2 - JJTTP Winter 2022
//
// By: Ilan Rodriguez
// January 21, 2022
//////////////////////////////////////////////////////


// This function takes a plainText string and a shift parameter,
// and performs the caesar cypher on the plainText string
function encode_caesar(plainText, shift) {
    let cypherText = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz"     // lookup table for the letters

    for (let i = 0; i < plainText.length; ++i) {    // loop from 0 to the end of the plaintext
        const character = plainText.charAt(i)       // get the character at index
        const position = alphabet.search(character) // get the index from the lookup table

        if (position === -1) {                      // protect against invalid formatted strings
            console.error(`Error: character '${character}' in plainText is not a letter!`)
            return ""                               // not the best way to catch errors, this might be an anti-pattern
        }

        let shiftedCharacter = alphabet.charAt((position + shift) % 26) // get the shifted character from the lookup table
        cypherText += shiftedCharacter              // append the encrypted character to the cypherText
    }

    return cypherText                               // return the encrypted text
}
