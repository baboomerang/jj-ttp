//////////////////////////////////////////////////////////////////
// Javascript Puzzle #2 - JJTTP Winter 2022
//
// By: Ilan Rodriguez
// January 17, 2022
//////////////////////////////////////////////////////

// Directions: Given two stings ransomNote and magazine,
// return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Ilan's approach to this problem:

// my approach is to decompose the ransomNote into an array of elements.
// from there, decompose the magazine as well into a second array of elements.
// sort both arrays in alphabetical order.
// compare element-wise if they are equal.
// if there is a mismatch in any step along the way, then the ransomNote is not composable
// if the comparison loops until the end of both array.lengths, then the ransomNote is composable

// some shortcuts I thought of:
// compare both lengths of the ransomNote and magazine, if magazine.length is less than ransomNote, return false skipping the above logic

// I looked at the official documentation to figure out how to use the "split","sort", and "splice" methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

function isComposable(var ransomNote, var magazine) {
    const ransomArr = ransomNote.split("");  // tokenize the string into an array
    const magazineArr = magazine.split("");  // tokenize this string as well into an array

    // if size of the magazine is less than ransom, then ransom cannot be composed at all
    if (magazineArr.length() < ransomArr.length()) {
        return false;
    }

    // I refactored my old code into this. This is so much nicer but sadly less efficient
    for (var x = 0; x < ransomArr.length(); ++x) {   // for each letter in the ransom
        const letter = ransomArr[x];                 // get a const reference of the letter
        const found = magazineArr.findIndex(letter); // find it's location in the magazine

        if (found === -1) {                          // if the letter is not found, the index is -1
            return false;                            // therefore the string is not composable
        }

        magazineArr.splice(found, 1);                // remove the used letter in the magazine
    }
    return true;                                     // no letters in the ransom returned error earlier, therefore the string is composable
}

// Old code from previous commit:
// sort the array based on alphanumeric value
// ransomArr.sort();
// magazineArr.sort();
// EDIT BY ILAN: we do not need to sort it in this case. we are not aiming for efficiency
// for (var x = 0; x < ransomArr.length(); x++) {
//     if (letter == magazineArr[x]) {
//         magazineArr.slice(x, 1);              // remove element at current position from the magazine
//     } else {
//         return false;
//     }
//     letter = ransomArr[x];
