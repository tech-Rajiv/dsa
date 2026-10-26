class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addTop(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    size() {
        let count = 1
        let current = this.head
        while (current.next) {
            count++
            current = current.next
        }
        return count
    }
    addLast(data) {
        const newNode = new Node(data)
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    addAtIndex(index, data) {
        const newNode = new Node(data)
        if (index < 0 || index > this.size()) {
            console.log("invalid index")
            return
        }
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        let i = 0
        while (i < index - 1) {
            current = current.next
            i++
        }
        newNode.next = current.next
        current.next = newNode
    }
    deleteTop() {
        this.head = this.head.next
    }
    deleteLast() {
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }
    deleteAtIndex(index) {
        if (index === 0) {
            this.deleteTop()
            return
        }
        if (index > this.size()) {
            console.log("invalid index")
            return
        }
        let current = this.head
        let i = 0
        while (i < index - 1) {
            current = current.next
            i++
        }
        current.next = current.next.next
    }
}

const node = new Node()
const list = new LinkedList()
list.addTop(5)
list.addTop(15)
list.addTop(25)
list.addLast(9)
list.addAtIndex(1, 1)
// console.log(list.size())
// list.deleteTop()
// list.deleteLast()
console.dir(list, { depth: null });
list.deleteAtIndex(0)
console.dir(list, { depth: null });