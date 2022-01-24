//////////////////////////////////////////////////////////////////
// Javascript Puzzle #2 - JJTTP Winter 2022
//
// By: Ilan Rodriguez
// January 17, 2022
//////////////////////////////////////////////////////


// This function takes one input string that is space delimited
// Ex: ("sample test string with space delimiter")
// It will reverse each individual word in this string and return a new string
function reverseWords(inputString) {
    const inputArray = inputString.split(" ");         // tokenize the input string with space delimiter

    for (let x = 0; x < inputArray.size; ++x) {        // loop through each word in the array
        inputArray[x] = reverseString(inputArray[x]);  // pass the word into a helper function and assign itself but now reversed
    }

    return inputArray.toString();                      // return the string form of the array
}


// This helper function takes one input string and reverses the letters
// It returns a reversed string.
function reverseString(inputString) {
    const result = "";

    for (let x = inputString.length; x >= 0; --x) {    // loop each letter of the string from the end to the beginning
        result += inputString.charAt(x);               // add each character to the string in reverse order
    }

    return result;                                     // return the reversed string
}
