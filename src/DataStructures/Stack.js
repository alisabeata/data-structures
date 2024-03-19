const initStack = () => {
  class Stack {
    constructor() {
      this.items = []
    }

    push(element) {
      this.items.push(element)
    }

    pop() {
      if (this.items.length === 0) {
        console.log('Underflow')
        return
      }
      return this.items.pop()
    }

    peek() {
      return this.items[this.items.length - 1]
    }

    print() {
      console.log(this.items.join(' '))
    }
  }

  // Example usage
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  console.log('Stack after pushing 1, 2, and 3:')
  stack.print() // Output: 1 2 3

  console.log('Peek at the top element:', stack.peek()) // Output: 3

  console.log('Pop element from the stack:', stack.pop()) // Output: 3
  console.log('Stack after popping an element:')
  stack.print() // Output: 1 2
}

export { initStack }
