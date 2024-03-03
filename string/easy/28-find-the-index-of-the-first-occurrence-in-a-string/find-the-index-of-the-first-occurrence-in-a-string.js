/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }

    let needleIndex = 0;

    for (let i = 0; i <= haystack.length; i++) {

        if (needle[needleIndex] === haystack[i]) {
            needleIndex++;

            if (needleIndex === needle.length) {
                return i - needle.length + 1;
            }

        } else {
            i -= needleIndex;
            needleIndex = 0;
        }
        
    }

    return -1;
};