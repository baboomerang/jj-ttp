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

// I looked at the official documentation to figure out how to use the "split" and "sort" methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function isComposable(var ransomNote, var magazine) {
    const ransomArr = ransomNote.split("");  // tokenize the string into an array
    const magazineArr = magazine.split("");  // tokenize this string as well into an array

    // if size of the magazine is less than ransom, then ransom cant be composed ever
    if (magazineArr.length() < ransomArr.length())
        return false;

    // sort the array based on alphanumeric value
    ransomArr.sort();
    magazineArr.sort();

    var letter = ransomArr[0];
    // loop the ransom note, and find the match and pop the matching element from the magazine
    for (var x = 0; x < ransomArr.length(); x++) {
        if (letter == magazineArr[x]) {
            magazineArr.slice(x, 1);                // remove element at current position from the magazine
        } else {
            return false;
        }
        letter = ransomArr[x];
    }
    // TODO: pop/skip over duplicate unneeded elements of the magazine array
}
