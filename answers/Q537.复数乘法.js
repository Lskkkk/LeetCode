/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
    const regex = /(-?\d+)\+?(-?\d+)i/;
    const [_0, a0, a1] = a.match(regex);
    const [_1, b0, b1] = b.match(regex);
    const c0 = a0 * b0 - a1 * b1;
    const c1 = a0 * b1 + a1 * b0;
    // return `${a0}:${a1}:${b0}:${b1}`;
    return `${c0}+${c1}i`;
};

test('正确数据', () => {
    expect(complexNumberMultiply("1+-1i", "1+-1i")).toBe("0+-2i");
});