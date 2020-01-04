/**
 * dfs + 回溯
 */

const exist = function (board, word) {
    if (!board.length || !word.length) return false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                if (findChild(board, word.slice(1), [`${i},${j}`])) {
                    return true;
                }
            }
        }
    }
    return false;
};

const findChild = (board, word, usedList) => {
    let hasChild = false;
    const neighborList = findNeighbor(board, word[0], usedList);
    neighborList.forEach(neighbor => {
        usedList.push(neighbor);
        const childWorld = word.slice(1);
        if (childWorld === '' || findChild(board, childWorld, usedList)) {
            hasChild = true;
        } else {
            usedList.pop();
        }
    });
    return hasChild;
};

const findNeighbor = (board, wordChar, usedList) => {
    if (!usedList.length) return '';
    const [currentRow, currentCol] = usedList[usedList.length - 1].split(',').map(s => parseInt(s));
    return [[1, 0], [0, 1], [-1, 0], [0, -1]].map((pair) => {
        const [rowOffset, colOffset] = pair;
        return safeGet(board, currentRow + rowOffset, currentCol + colOffset) === wordChar ?
            `${currentRow + rowOffset},${currentCol + colOffset}` :
            '';
    }).filter(index => index !== '' && !usedList.some(use => use === index));
};

const safeGet = (board, row, col) => board[row] ? board[row][col] : undefined;

test('正确情况', () => {
    expect(
        exist(
            [
                ["A", "B", "C", "E"],
                ["S", "F", "C", "S"],
                ["A", "D", "E", "E"]
            ],
            "ABCCED"
        )
    ).toBe(true);
});

test('多个开始', () => {
    expect(
        exist(
            [
                ["A", "B", "C", "E"],
                ["S", "T", "C", "D"],
                ["A", "B", "C", "D"],
                ["R", "O", "C", "E"]
            ],
            "ABCCED"
        )
    ).toBe(true);
});

test('不匹配的情况', () => {
    expect(
        exist(
            [
                ["A", "B", "C", "A"],
                ["S", "T", "C", "E"],
                ["R", "O", "C", "A"]
            ],
            "ABCCEE"
        )
    ).toBe(false);
});

test('多个中间点', () => {
    expect(
        exist(
            [
                ["A", "B", "C", "A"],
                ["S", "T", "C", "E"],
                ["R", "O", "C", "E"]
            ],
            "ABCCEE"
        )
    ).toBe(true);
});