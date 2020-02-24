/**
 * @param {number[]} citations
 * @return {number}
 */
// const hIndex = (citations) => {
//     const length = citations.length;
//     if (length === 0) return 0;

//     let index = -1;
//     for (let i = 0; i < length; i++) {
//         if (length - i >= citations[i]) {
//             index = i;
//         } else {
//             break;
//         }
//     }

//     let min = index === -1 ? 1 : citations[index];
//     let max = length;
//     let h = min;
//     for (let i = min; i <= max; i++) {
//         if (citations[length - i] >= i) {
//             h = i;
//         }
//     }
//     return h;
// };

const hIndex = (citations) => {
    const length = citations.length;
    if (length === 0) return 0;

    let left = 0, right = length, middle = left + Math.floor((right - left + 1) / 2);
    while (left < right) {
        middle = left + Math.floor((right - left + 1) / 2);
        if (citations[length - middle] >= middle) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }
    return left;
};


test('测试', () => {
    expect(hIndex([])).toStrictEqual(0);
    expect(hIndex([0])).toStrictEqual(0);
    expect(hIndex([0, 0])).toStrictEqual(0);
    expect(hIndex([100])).toStrictEqual(1);
    expect(hIndex([0, 1])).toStrictEqual(1);
    expect(hIndex([11, 15])).toStrictEqual(2);
    expect(hIndex([0, 1, 2])).toStrictEqual(1);
    expect(hIndex([0, 1, 2, 3])).toStrictEqual(2);
    expect(hIndex([0, 0, 4, 4])).toStrictEqual(2);
    expect(hIndex([0, 4, 4, 4])).toStrictEqual(3);
    expect(hIndex([0, 1, 3, 5, 6])).toStrictEqual(3);
    expect(hIndex([0, 1, 4, 5, 6])).toStrictEqual(3);
    expect(hIndex([0, 1, 4, 5, 9999])).toStrictEqual(3);
    expect(hIndex([0, 1, 2, 3, 3, 3])).toStrictEqual(3);
});