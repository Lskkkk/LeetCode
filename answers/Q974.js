/**
 * 通常，涉及连续子数组问题的时候，我们使用前缀和来解决它们。我们令 P[i+1] = A[0] + A[1] + ... + A[i]。
 * 那么，每个连续子数组就可以写成 P[j] - P[i] （其中 j > i） 的形式。
 * 因此，我们将 P[j] - P[i] 模 K 等于 0 等价于 P[i] 与 P[j] 在模 K 的意义下同余。
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysDivByK = function (A, K) {
    const left = {};
    const length = A.length;
    const P = [0];
    for (let i = 0; i < length; i++) {
        P[i + 1] = P[i] + A[i];
    }

    // 这里寻找同余数的和的数量用对象或数组的索引，真是人才
    for (let i = 0; i < length + 1; i++) {
        const index = (P[i] % K + K) % K;
        left[index] = left[index] !== undefined ? left[index] + 1 : 1;
    }

    let sum = 0;
    for (let key in left) {
        // 同余数的和任意挑选两个的差值，均能整除K
        sum += left[key] * (left[key] - 1) / 2;
    }
    return sum;
};

test('测试', () => {
    expect(subarraysDivByK([5], 9)).toBe(0);
    expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
});