/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null,
        next = null,
        current = head;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};