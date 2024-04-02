function convert(s: string, numRows: number): string {
    if (s.length === 1 || numRows === 1) {
        return s;
    }

    const stringMap: Map<number, string> = new Map();

    let rowIndex = 0;
    let direction = 1;

    for (let i = 0; i < s.length; i++) {
        let currentStringForRow = stringMap.get(rowIndex) ?? '';
        currentStringForRow = currentStringForRow.concat(s[i]);
        stringMap.set(rowIndex, currentStringForRow);

        if (rowIndex === 0) {
            direction = 1;
        } else if (rowIndex === numRows - 1) {
            direction = -1;
        }

        rowIndex += direction;
    }

    let concatenatedString = "";

    stringMap.forEach(value => {
        concatenatedString += value;
    })

    return concatenatedString;
};