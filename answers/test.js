function maxInWindows(num, size)
{
    if (size === 0 || num.length < size) return [];
    const list = [];
    list.push(Math.max(...num.slice(0, size)));
    let i = size, j = 1;
    while (i < num.length) {
        list.push(Math.max(...num.slice(j, i+1)));
        i++;
        j++;
    }
    return list;
}

test('测试', () => {
    expect(maxInWindows([10,14,12,11],0)).toStrictEqual([]);
});