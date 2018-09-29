/* Circular_Buffer / Circular_Queue / Cyclic_Buffer / Ring_Buffer */
class Circular {
    constructor(size) {
        this.size = size;
        this.memory = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(val) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log('Memory Full');
        } else {
            if (this.rear === -1 && this.front === -1) {
                this.rear = 0;
                this.front = 0;
            } else {
                this.rear = (this.rear + 1) % this.size;
            }

            this.memory[this.rear] = val;
            console.log(`Enqueued ${val}`);
        }
    }

    dequeue() {
        let value;
        if (this.rear === -1 && this.front === -1) {
            console.log('Memory Empty');

            return -1;
        } else {
            value = this.memory[this.front];
            if (this.rear === this.front) {
                this.rear = -1;
                this.front = -1;
            } else {
                this.front = (this.front + 1) % this.size;
            }

            console.log(`Dequeued ${value}`);
            return value;
        }
    }

    display() {
        if (this.front === -1 && this.rear === -1) {
            console.log('Memory is Empty!');
        } else if (this.front <= this.rear) {
            for (let i = this.front; i <= this.rear; i++) {
                console.log(`${i} : ${this.memory[i]}`);
            }
        } else {
            for (let i = this.front; i <= this.size - 1; i++) {
                console.log(`${i} : ${this.memory[i]}`);
            }
            for (let i = 0; i <= this.rear; i++) {
                console.log(`${i} : ${this.memory[i]}`);
            }
        }
    }
}


/* Init */
circular = new Circular(7);
circular.enqueue(2);
circular.display();
circular.enqueue(34);
circular.display();
circular.enqueue(23);
circular.display();
circular.enqueue(5);
circular.display();
circular.dequeue();
circular.display();
circular.dequeue();
circular.display();
circular.enqueue(5);
circular.display();
circular.enqueue(5);
circular.display();
circular.enqueue(5);
circular.display();
circular.enqueue(5);
circular.display();
circular.enqueue(5);
circular.display();
circular.enqueue(5);
circular.display();
