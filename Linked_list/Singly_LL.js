'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class SinglyLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {// pushes in the end of the list:
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {//pops in the end of the list:
        if (!this.head) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let newTail;
            while (curr.next) {
                newTail = curr;
                curr = curr.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            return curr;
        }
        this.length--;
    }

    unshift (val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    shift () {
        if(!this.head) console.log('List empty');
        let currhead = this.head;
        this.head = currhead.next;
        this.length--;
        return currhead;
    }
    
    get (i) {// implementing index based search in LL:
        if (i < 0 || i >= this.length) {
            return console.log('not a valid Index');
        } else {
            let curr = this.head;
            while (i > 0) {
                curr = curr.next;
                i--;
            }
            // console.log(curr.val);
            return curr;
        }
    }

    // set (val) {
    //     if (i < 0 || i >= this.length) {
    //         console.log('not a valid index');
    //     } else {
    //         let curr = this.head;
    //         while (i > 0) {
    //             curr = curr.next;
    //             i--;
    //         }
    //         curr.val = val;
    //     }
    // }

    set (i, val) {
        let node = this.get(i);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    traverse () {
        let curr = this.head;
        const arr = [];
        while(curr) {
            arr.push(curr.val + ' ');
            curr = curr.next;
        }
        console.log(arr.toString());
    }

    // insert (i, val) {
    //     let node = this.get(i);
    //     const newNode = new Node(val);
    //     if (node) {
    //         newNode.next = node;
    //         let curr = this.head;
    //         while (i > 1) {
    //             curr = curr.next;
    //             i--;
    //         }
    //         curr.next = newNode;
    //     }
    // }

    insert (i, val) {
        if (i < 0 || i > this.length) return console.log('not a valid index.');
        if (i == this.length) return this.push(val);
        if (i == 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(i - 1);
        newNode.next = prev.next;
        prev.next = newNode;
    }

    remove (i) {
        if (i < 0 || i > this.length) return console.log('not a valid index');
        if (i == this.length) return this.pop();
        if (i == 0) return this.shift();
        let prev = this.get(i - 1);
        const removed = prev.next;
        let temp = prev.next.next;
        prev.next.next = null;
        prev.next = temp;
        return removed;
    }

    reversing() {
        // swapping (head and tail):
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let forward, curr, prev;
        curr = this.tail;
        prev = null;

        while (curr) {
            forward = curr.next;
            curr.next = prev;
            prev = curr;
            curr = forward;
        }
        return this;
    }
}

const list = new SinglyLL();
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// list.pop();
// list.pop();
list.shift();
list.unshift(2);
list.get(4);
list.set(3, 100);
list.insert(3, 99);
list.traverse();
console.log(list.remove(2));
list.traverse();
list.reversing();
list.traverse();


console.log("%s is %d yrs old", 'priyanshu', 20);
console.log(-"2", +"2")
console.log("a" - "b")