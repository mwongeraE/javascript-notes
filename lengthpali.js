
var longestPalindrome = function (string) {

    "use strict";
    var longest = (''),
        length = longest.length,
        i,
        currentLetter = string[i],
        firstOccurence,
        subString = string.slice(i, firstOccurence + 1),
        j;
    for (i = 0; i < string.length; i + 1) {
        for (j = i + 1; j < string.length; j + 1) {
            if (currentLetter === string[j]) {
                firstOccurence = j;
                if (subString.length > longest.length &&
                        subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
                    longest = subString;
                }
            }
        }
    }
    return length;
};
