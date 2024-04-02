function convert(s: string, numRows: number): string {
    if (s.length === 1 || numRows === 1) {
        return s;
    }

    // this is an array where I will sort the string for each row by index
    const stringsByRow = new Array(numRows).fill('');

    let rowIndex = 0;
    let ascending = true; // this will increment or decrement row Index.

    for (let i = 0; i < s.length; i++) {
        stringsByRow[rowIndex] += s[i];

        if (rowIndex === 0) {
            ascending = true;
        } else if (rowIndex === numRows - 1) {
            ascending = false;
        }

        rowIndex += ascending ? 1 : -1;
    }

    return stringsByRow.join('');
};