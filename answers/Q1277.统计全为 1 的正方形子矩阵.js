/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = (matrix) => {
    if (!matrix.length || !matrix[0].length) return 0;
    let colLength = matrix[0].length;
    let rowLength = matrix.length;
    const maxSquaresBorder = Math.min(colLength, rowLength);
    let total = 0;
    for (let i = maxSquaresBorder; i > 0; i--) {
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                if (searchSquare(matrix, row, col, i)) total++;
            }
        }
    }
    return total;
};

const searchSquare = (matrix, startRow, startCol, border) => {
    if (!matrix[startRow + border - 1] || matrix[startRow + border - 1][startCol + border - 1] !== 1) return false;

    let isFind = true;
    for (let row = 0; row < border; row++) {
        for (let col = 0; col < border; col++) {
            if (!matrix[startRow + row] || matrix[startRow + row][startCol + col] !== 1) {
                isFind = false;
                break;
            }
        }
    }
    return isFind;
};

test('测试', () => {
    expect(countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ])).toBe(15);

    expect(countSquares([
        [0, 1, 1, 1]
    ])).toBe(3);
});