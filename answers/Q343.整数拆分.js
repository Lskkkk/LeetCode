/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n === 1) return 1;
    const max = [];
    for (let i = 2; i <= n || i <= n / 2; i++) {
        const splitFloor = Math.floor(n / i);
        max.push(Math.pow(splitFloor, i - 1) * (n - splitFloor * (i - 1)));

        const splitCeil = Math.ceil(n / i);
        if ((n - splitCeil * (i - 1)) > 0) {
            max.push(Math.pow(splitCeil, i - 1) * (n - splitCeil * (i - 1)));
        }
    }
    return Math.max(...max);
};

test('正确数据', () => {
    expect(integerBreak(10)).toBe(36);
});