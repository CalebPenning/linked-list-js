class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(val) {
        let newNode = new Node(val)

        if (this.head === null) this.head = newNode

        if (this.tail !== null) this.tail.next = newNode

        this.tail = newNode
    }

    printNodes() {
        let current = this.head

        while (current !== null) {
            console.log(current.val)
            current = current.next
        }
    }

    find(val) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.val === val) return true
            currentNode = currentNode.next
        }
        return false
    }

    append(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }
}

const firstPage = new Node("google.com", new Node("reddit.com", new Node("amazon.com")))

