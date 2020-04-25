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
var deleteDuplicates = function(head) {
    let node = new ListNode(0);
        node.next = head;
    let current = node;
    
    while(current.next && current.next.next) {
        if (current.next.val !== current.next.next.val) {
            current = current.next;
        } else {
            let val = current.next.val;
            
            while(current.next && current.next.val === val) {
                current.next = current.next.next;
            }
        }
    }
    
    return node.next;
};