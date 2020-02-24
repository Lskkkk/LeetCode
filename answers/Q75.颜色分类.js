/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    let zeroIndex = 0;
    let twoIndex = nums.length - 1;
    let current = 0;

    while (current - 1 !== twoIndex) {
        if (nums[current] === 0) {
            nums[current] = nums[zeroIndex];
            nums[zeroIndex] = 0;
            zeroIndex++;
            current++;
        } else if (nums[current] === 2) {
            nums[current] = nums[twoIndex];
            nums[twoIndex] = 2;
            twoIndex--;
        } else {
            current++;
        }
    }
};

test('测试', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toStrictEqual([0, 0, 1, 1, 2, 2]);
});

test('测试2', () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toStrictEqual([0, 1, 2]);
});