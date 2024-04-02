function isIsomorphic(s: string, t: string): boolean {
    // a map where I will keep each character of s as key and t as value
    const stringMap: Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
        // if there is no value for the character
        // set the key as s[i] and value as t[i]
        // only if t[i] is not used in other keys
        if (!stringMap.has(s[i])) {
            if (Array.from(stringMap.values()).includes(t[i])) {
                return false;
            }

            stringMap.set(s[i], t[i]);
            continue;
        }
        
        // if there is a value already set, check if it matches the one of t at the same index
        if (stringMap.get(s[i]) !== t[i]) {
            return false;
        }
    }

    return true;
};