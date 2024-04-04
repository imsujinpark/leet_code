function maxDepth(s: string): number {
    let maxDepth = 0;
    let parenthesisMarker = 0;

    // loop the given string s
    for(let i = 0; i < s.length; i++) {
        // mark the number of opening parenthesis
        if (s[i] === '(') {
            parenthesisMarker++;
        } else if (s[i] === ')') {
            // mark the number of closing parenthesis
            // mark the maximum depth only if it's bigger than the current max
            maxDepth = Math.max(maxDepth, parenthesisMarker);
            parenthesisMarker--;
        }
    }

    // if parenthesisMarker is not 0, it means the parenthesis are not closed properly so return 0
    return parenthesisMarker !== 0 ? 0 : maxDepth;
};