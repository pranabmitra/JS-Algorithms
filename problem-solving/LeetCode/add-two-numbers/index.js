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
var addTwoNumbers = function(l1, l2) {
    let sum = 0,
        carry = 0,
        result = new SinglyLinkedList();
    
    while (!!l1 || !!l2) {
        sum = 0;
        if (!!l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (!!l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if (!!carry) {
            sum += carry;
        }
        
        carry = sum > 9 ? 1 : 0;
        result.add(sum % 10);
    }
    
    if (!!carry) {
        result.add(carry);
    }
    
    return result.head;
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(val) {
        let node = new ListNode(val),
            currentNode = this.head;

        if (!currentNode) {
            this.head = node;
            this.length++;

            return node;
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this.length++;

        return node;
    }
}

