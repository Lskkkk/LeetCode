/**
 * 乘积 = 当前数左边的乘积 * 当前数右边的乘积
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const length = nums.length;
    const result = [];
    let k = 1;
    // 一遍遍历获取每个元素左边的乘积数组
    for (let i = 0; i < length; i++) {
        result[i] = k;
        k *= nums[i];
    }
    k = 1;
    // 第二遍遍历乘以每个元素的所有右边元素得到最终值
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= k;
        k *= nums[i];
    }
    return result;
};

test('测试', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
});