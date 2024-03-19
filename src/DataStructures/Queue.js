const initQueue = () => {
  class Queue {
    constructor() {
      this.items = []
    }

    enqueue(element) {
      this.items.push(element)
    }

    dequeue() {
      if (this.items.length === 0) {
        console.log('Underflow')
        return
      }
      return this.items.shift()
    }

    front() {
      return this.items[0]
    }

    print() {
      console.log(this.items.join(' '))
    }
  }

  // Example usage
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  console.log('Queue after enqueueing 1, 2, and 3:')
  queue.print() // Output: 1 2 3

  console.log('Front element of the queue:', queue.front()) // Output: 1

  console.log('Dequeue element from the queue:', queue.dequeue()) // Output: 1
  console.log('Queue after dequeuing an element:')
  queue.print() // Output: 2 3
}

export { initQueue }
