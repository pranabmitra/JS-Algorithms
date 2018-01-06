class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data);

        if (this.length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

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
            count = 1,
            previousNode = null,
            nextNode = null,
            nodeToDelete = null,
            deletedNode = null;

        /* invalid position */
        if (position > this.length || position < 0) {
            throw new Error("Not Found");
        }

        /* remove 1st node */
        if (position === 1) {
            this.head = currentNode.next;

            /* check the second node */
            if (!this.head) {
                this.head.previous = null;
            } else {
                this.tail = null;
            }
        } else if (this.length === position) {
            // remove last node
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            /* valid position */
            while(count < position) {
                currentNode = currentNode.next;
                count++;
            }

            previousNode = currentNode.previous;
            nodeToDelete = currentNode;
            nextNode = currentNode.next;

            previousNode.next = nextNode;
            nextNode.previous = previousNode
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }

        this.length--;

        return deletedNode;
    }
}


/********* Output ************/
/**  sample: 5 -> 4 -> 8   **/
var list1 = new DoublyLinkedList();
list1.add(5);
list1.add(4);
list1.add(8);

console.log(list1);
console.log(list1.findNodeAt(1));

list1.remove(2);
console.log(list1);
