function maxDepth(s: string): number {
    let maxDepth = 0;
    let parenthesisMarker = 0;

    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            parenthesisMarker++;
        } else if (s[i] === ')') {
            maxDepth = parenthesisMarker > maxDepth ? parenthesisMarker : maxDepth;
            parenthesisMarker--;
        }
    }

    return parenthesisMarker !== 0 ? 0 : maxDepth;
};