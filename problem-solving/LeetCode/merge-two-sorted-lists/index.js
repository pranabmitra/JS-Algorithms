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
var mergeTwoLists = function(l1, l2) {
    let i = 0,
        result = new ListNode(-1),
        head = result;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            result.next = l1;
            l1 = l1.next;
        } else {
            result.next = l2;
            l2 = l2.next;
        }
        
       result = result.next;
    }
    
    if (!l1) {
        result.next = l2
    } else if (!l2) {
        result.next = l1;
    }
    
    return head.next;
};