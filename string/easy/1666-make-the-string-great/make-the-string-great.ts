function makeGood(s: string): string {
    let i = 0;

    while (i < s.length && s[i + 1]) {
        // check if i and i+1 chars are same char on diff case
        if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32) {
            s = s.substring(0, i) + s.substring(i + 2);

            // if it was the first char, start from 0
            if (i === 0) {
                i = -1;
            // if not, go back two steps to see if adjacent chars are the same
            } else {
                i -= 2;
            }
        }
        i++;
    }
    
    return s;
};