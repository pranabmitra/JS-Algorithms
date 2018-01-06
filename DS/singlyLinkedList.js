class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data),
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


    findNodeAt(position) {
        let currentNode = this.head,
            count = 1;

        /* invaid position */
        if (this.length === 0 || position > this.length || position < 0) {
            throw new Error("Not Found");
        }

        /* valid position */
        while(count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(position) {
        let currentNode = this.head,
            count = 0,
            previousNode = null,
            nodeToDelete = null,
            deletedNode = null;

        /* invalid position */
        if (position > this.length || position < 0) {
            throw new Error("Not Found");
        }

        /* remove 1st node */
        if (position === 1) {
            deletedNode = currentNode;
            this.head = currentNode.next;
            currentNode = null;
            this.length--;

            return deletedNode;
        }

        /* valid position */
        while(count < position) {
            previousNode = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        previousNode.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        this.length--;

        return deletedNode;
    }
}


/********* Output ************/
/**  sample: 5 -> 4 -> 8   **/
var list1 = new SinglyLinkedList();
list1.add(5);
list1.add(4);
list1.add(8);

console.log(list1);
console.log(list1.findNodeAt(1));

list1.remove(2);
console.log(list1);
