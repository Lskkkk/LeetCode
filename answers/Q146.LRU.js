/**
 * 总结：
 * 1. LRU使用哈希表+双链表，可保证在O(1)完成
 * 2. 双链表存储更新关系，哈希表存储链表中的节点，目的是返回值
 * 3. LRU在get值和put值时都要求新值在最高优先级，即放在双链表的头部
 * 4. 所以在get值和put值时，都删除原来的值，而在双链表头部增加新值
 */


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.doubleList = new DoubleList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.get(key) === undefined) {
        return -1;
    }
    const node = this.cache.get(key);
    this.doubleList.remove(node); // get时要更新一遍node在链表中的位置，先remove再add
    this.doubleList.add(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.get(key)) { // 更新已有值时直接删除原节点，将更新值放到链表头
        this.doubleList.remove(this.cache.get(key));
    } else {
        if (this.doubleList.size >= this.capacity) {
            const tail = this.doubleList.removeTail();
            this.cache.delete(tail.key);
        }
    }
    const node = new Node(key, value);
    this.cache.set(key, node);
    this.doubleList.add(node);
};

var Node = function (key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
};

var DoubleList = function () {
    this.head = new Node(0, 0); // 头部和尾部始终都是两个空节点
    this.tail = new Node(0, 0);
    this.size = 0;
    this.head.prev = this.tail;
    this.tail.next = this.head;
};
DoubleList.prototype.add = function (node) { // 节点加入时要更新四个指针
    node.prev = this.head.prev;
    this.head.prev = node;
    node.next = this.head;
    node.prev.next = node;
    this.size++;
};
DoubleList.prototype.remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
};
DoubleList.prototype.removeTail = function () {
    if (this.head.prev === this.tail) {
        return null;
    }
    const node = this.tail.next;
    this.tail.next = node.next;
    this.tail.next.prev = this.tail;
    this.size--;
    return node;
};

test('正确数据', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);       // 返回  1
    cache.put(3, 3);    // 该操作会使得密钥 2 作废
    expect(cache.get(2)).toBe(-1);       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得密钥 1 作废
    expect(cache.get(1)).toBe(-1);       // 返回 -1 (未找到)
    expect(cache.get(3)).toBe(3);       // 返回  3
    expect(cache.get(4)).toBe(4);       // 返回  4
});

test('更新数据不删除多余节点', () => {
    const cache = new LRUCache(2);
    expect(cache.get(2)).toBe(-1);
    cache.put(2, 6);
    expect(cache.get(1)).toBe(-1);
    cache.put(1, 5);
    cache.put(1, 2);
    expect(cache.get(1)).toBe(2);
    expect(cache.get(2)).toBe(6);
});