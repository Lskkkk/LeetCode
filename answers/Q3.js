/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let start = 0;
    let end = 0;
    const sLength = s.length;

    while (end < sLength) {
        const str = s.substring(start, end + 1);
        maxLength = str.length > maxLength ? str.length : maxLength;
        const findNextIndex = str.indexOf(s[end + 1] || '');
        start += findNextIndex + 1;
        end += 1;
    }
    return maxLength;
};

test('正确情况', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});