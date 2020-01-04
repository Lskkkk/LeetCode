/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const sumListHead = {
        val: 0,
        next: null
    };
    let current1 = l1;
    let current2 = l2;
    let sumCurrent = sumListHead;

    while (!(current1 === null && current2 === null)) {
        const plus = sumCurrent.val + getVal(current1) + getVal(current2);
        let step = 0;
        if (plus >= 10) {
            sumCurrent.val = plus - 10;
            step = 1;
        } else {
            sumCurrent.val = plus;
        }

        current1 = current1 && current1.next;
        current2 = current2 && current2.next;

        if (current1 === null && current2 === null && step === 0) {
            break;
        }
        sumCurrent.next = {
            val: step,
            next: null
        };
        sumCurrent = sumCurrent.next;
    }

    return sumListHead;
};

const getVal = (node) => node ? node.val : 0;

test('--', () => {});