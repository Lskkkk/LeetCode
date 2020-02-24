/**
 * 二分法+滚动窗口
 */

const findClosestElements = function (arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    let middle = 0;

    // 二分法查找k项数组的起始位
    while (left < right) {
        middle = Math.floor((right - left) / 2 + left);

        // middle为k项数组的起始位置
        // 比较起始位与中心的距离，起始位离中心点距离大，则起始位肯定在[middle + 1, right]
        if (x - arr[middle] > arr[middle + k] - x) {
            left = middle + 1;
        } else {
            // 起始位距离中心点距离小，则肯定在[left, middle]
            right = middle;
        }
    }
    return arr.slice(left, left + k);
};

test('测试', () => {
    // expect(findClosestElements([1, 2, 3, 4, 5, 6, 7], 3, 4)).toStrictEqual([3, 4, 5]);
    expect(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)).toStrictEqual([10]);
});