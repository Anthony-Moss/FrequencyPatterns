// Given two positive integers write a function to find if two numbers have the same frequency of digits

function sameNumFreq(num1, num2) {
    // Puts num1 to a string to get the values of each number
    let numString1 = num1.toString();
    // Puts num2 to a string to get the values of each number
    let numString2 = num2.toString();
    if (numString1.length !== numString2.length) {
        return false;
    }

    for (let val of numString1) {
        if (numString1[val]) {
            numFreqCounter1 += 1;
        } else {
            numFreqCounter1 = 1;
        }
    }
    console.log(numFreqCounter1)
}

sameNumFreq(100, 200)