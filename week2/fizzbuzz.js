//////////////////////////////////////////////////////////////////
// Javascript Puzzle #1 - JJTTP Winter 2022
//
// By: Ilan Rodriguez
// January 14, 2022
//////////////////////////////////////////////////////

// This function checks if a n is a multiple of 3 and/or 5 and prints fizz and/or buzz
function check_fizzbuzz(number) {

    // if (typeof number !=== 'number') {
    //     throw "Not a number"
    // }
    //
    // I was curious to see if javascript had a built-in for the above code ^
    // This is what I consulted for the syntax of "isNaN" function
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN?
    if (isNaN(number)) {
        console.error("This is not a number");
        return;
    }

    for (var n = 1; n <= number; n++) {   // loop from 1 till the number
        if (n % 5 === 0 && n % 3 === 0) { // check if 3 and 5 are factors
            console.log("Fizz Buzz");     // print the FizzBuzz statement
        } else if (n % 5 === 0) {         // else check if just 5 is the factor
            console.log("Buzz");          // print the Buzz statement
        } else if (n % 3 === 0) {         // else check if just 3 is the factor
            console.log("Fizz");          // print the Fizz statement
        } else {
            console.log(n);               // else just print the number
        }
    }

}
