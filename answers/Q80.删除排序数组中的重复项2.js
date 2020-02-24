/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let index = 0;
    while (index < nums.length) {
        const num = nums[index];
        if (num !== undefined && nums.filter(n => n === num).length > 2) {
            nums.splice(index, 1);
            index--;
        }
        index++;
    }
    return nums.length;
};

test('正确情况', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums).toStrictEqual([1, 1, 2, 2, 3]);
});