const initQueue = () => {
  class Queue {
    constructor() {
      this.items = []
    }

    enqueue(element) {
      this.items.push(element)
    }

    dequeue() {
      if (this.isEmpty()) {
        console.log('Undeflow')
        return
      }

      return this.items.shift()
    }

    front() {
      if (this.isEmpty()) {
        console.log('Is Empty')
        return
      }

      return this.items[0]
    }

    isEmpty() {
      return this.items.length === 0
    }

    size() {
      return this.items.length
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
