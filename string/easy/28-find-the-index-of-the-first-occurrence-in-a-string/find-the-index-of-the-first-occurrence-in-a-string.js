/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // needle length cannot be bigger than haystack length 
    if (needle.length > haystack.length) {
        return -1;
    }

    let needleIndex = 0;

    for (let i = 0; i <= haystack.length; i++) {
        // If characters match, move to the next character in both needle and haystack
        if (needle[needleIndex] === haystack[i]) {
            needleIndex++;

            // If all characters in needle are found in sequence, return the starting index
            if (needleIndex === needle.length) {
                return i - needle.length + 1;
            }

        } else {
            // If characters don't match, reset the iterator and needle index
            i -= needleIndex;
            needleIndex = 0;
        }
    }

    return -1;
};