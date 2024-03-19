const initLinkedList = () => {
  class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }

  class LinkedList {
    constructor() {
      this.head = null
      this.size = 0
    }

    insertFirst(data) {
      this.head = new Node(data, this.head)
      this.size++
    }

    insertLast(data) {
      const newNode = new Node(data)
      this.size++

      if (!this.head) {
        this.head = newNode
        return
      }

      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }

    insertAt(position, data) {
      if (position < 0 || position > this.size) {
        console.log('Invalid position')
        return
      }

      if (position === 0) {
        this.insertFirst(data)
        return
      }

      const newNode = new Node(data)

      this.size++

      let current = this.head
      let prev = null
      let count = 0

      while (count < position) {
        prev = current
        current = current.next
        count++
      }

      prev.next = newNode
      newNode.next = current
    }

    removeAt(position) {
      if (position < 0 || position > this.size) {
        console.log('Invalid position')
        return
      }

      this.size--

      if (position === 0) {
        this.head = this.head.next
        return
      }

      let current = this.head
      let prev = null
      let count = 0

      while (count < position) {
        prev = current
        current = current.next
        count++
      }

      prev.next = current.next
    }

    getAt(position) {
      if (position < 0 || position > this.size) {
        console.log('Invalid position')
        return
      }

      let current = this.head
      let count = 0

      while (current && count < position) {
        current = current.next
        count++
      }

      return current.data
    }

    print() {
      let current = this.head

      while (current) {
        console.log(current.data)
        current = current.next
      }
    }
  }

  // Example usage:
  const linkedList = new LinkedList()

  linkedList.insertFirst(1)
  linkedList.insertLast(2)
  linkedList.insertLast(3)
  console.log('\nPrint:')
  linkedList.print() // 1, 2, 3
  linkedList.insertAt(1, 5)
  console.log('\nAfter Insert at position 1:')
  linkedList.print() // 1, 5, 2, 3
  linkedList.removeAt(2)
  console.log('\nAfter Remove at position 2:')
  linkedList.print() // 1, 5, 3

  console.log('Data at position 0:', linkedList.getAt(0))
}
export { initLinkedList }
