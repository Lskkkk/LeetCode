const convert = function (s, numRows) {
    if (numRows === 1) return s;
    const sArray = [];
    for (let i = 0; i < numRows; i++) {
        sArray.push([]);
    }
    let row = 0;
    let isColumn = true;

    for (let i = 0; i < s.length; i++) {
        if (!isColumn) {
            sArray[row].push(s[i]);
            row--;
            if (row === 0) {
                isColumn = true;
            }
        } else {
            sArray[row].push(s[i]);
            if (row < numRows - 1) {
                row++;
            } else {
                row--;
                isColumn = numRows <= 2;
            }
        }
    };

    return sArray.map(line => line.join('')).join('');
}


test('正确情况', () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});