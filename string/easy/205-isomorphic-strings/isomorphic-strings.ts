function isIsomorphic(s: string, t: string): boolean {
    // a map where I will keep each character of s as key and t as value
    const mapS: Map<string, string> = new Map();
    const mapT: Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
        // if there is no value for the character
        // set the key as s[i] and value as t[i]
        // only if t[i] is not used in other keys
        if (!mapS.has(s[i])) {
            mapS.set(s[i], t[i]);
        } else if (mapS.get(s[i]) !== t[i]) {
            return false
        }
        
        if (!mapT.has(t[i])) {
            mapT.set(t[i], s[i]);
        } else if (mapT.get(t[i]) !== s[i]) {
            return false
        }
    }

    return true;
};