const initDoublyLinkedList = () => {
  class Node {
    constructor (data) {}
  }

  class DoublyLinkedList {}

  return
  // Example usage:
  const doublyLinkedList = new DoublyLinkedList()

  doublyLinkedList.insertFirst(1)
  doublyLinkedList.insertLast(2)
  doublyLinkedList.insertLast(3)

  console.log('Forward:')
  doublyLinkedList.print() // 1, 2, 3

  console.log('\nBackward:')
  doublyLinkedList.printTail() // 3, 2, 1

  doublyLinkedList.insertAt(1, 10)
  console.log('\nAfter Insert at position 1:')
  doublyLinkedList.print() // 1, 10, 2, 3

  doublyLinkedList.removeAt(2)
  console.log('\nAfter Remove at position 2:')
  doublyLinkedList.print() // 1, 10, 3

  console.log('Data at position 0:', doublyLinkedList.getAt(0))
}

export { initDoublyLinkedList }
