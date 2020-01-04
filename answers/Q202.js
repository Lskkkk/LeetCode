/**
 * @param {number} n
 * @return {boolean}
 */
let record = [];
var isHappy = function (n) {
    record.push(n);
    const nStr = new String(n);
    const sum = [...nStr].reduce((pv, cv) => pv += Math.pow(parseInt(cv), 2), 0);
    if (sum === 1) {
        record = [];
        return true;
    }
    if (record.some(r => r === sum)) return false; // 出现重复即为无限循环
    record.push(sum);
    return isHappy(sum);
};

test('正确数据', () => {
    expect(isHappy(19)).toBe(true);
});