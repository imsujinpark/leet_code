function makeGood(s: string): string {
    // this function will either return number of bad char or null if there is no bad char
    function getBadCharStartingIndex(s: string): number|null {
        for (let i = 0; i < s.length - 1; i++) {
            // check if s[i+1] is an upper case of s[i] or vice-versa
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32) {
                return i;
            }
        }

        return null;
    }

    function removeBadStrings(s: string): string {
        const badCharStartingIndex = getBadCharStartingIndex(s);
        
        if (badCharStartingIndex !== null) {
            s = s.substring(0, badCharStartingIndex) + s.substring(badCharStartingIndex + 2);

            // untill there is no bad char, iterate
            return removeBadStrings(s);
        }

        return s;
    }

    return removeBadStrings(s);
};