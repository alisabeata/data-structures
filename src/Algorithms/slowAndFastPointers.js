// Slow and Fast Pointers

const initSlowAndFastPointers = () => {
  function hasCycle(head) {
    // If the linked list is empty or has only one node, return false
    if (!head || !head.next) {
      return false
    }

    // Initialize two pointers, slow and fast
    let slow = head // Slow pointer moves one step at a time (x1)
    let fast = head.next // Fast pointer moves two steps at a time (x2)

    // Iterate until slow and fast pointers meet
    while (slow !== fast) {
      // If fast pointer reaches the end of the list or next node is null, there is no cycle
      if (!fast || !fast.next) {
        return false
      }
      // Move slow pointer one step ahead
      slow = slow.next
      // Move fast pointer two steps ahead
      fast = fast.next.next
    }

    // If slow and fast pointers meet, there is a cycle
    return true
  }

  function createLinkedListWithCycle(arr, pos) {
    if (arr.length === 0) return null

    // Create nodes
    const nodes = arr.map((val) => ({ val, next: null }))

    // Connect nodes
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1]
    }

    // Create cycle if pos is valid
    if (pos >= 0 && pos < nodes.length) {
      nodes[nodes.length - 1].next = nodes[pos]
    }

    // Return head of the linked list
    return nodes[0]
  }

  console.log(hasCycle(createLinkedListWithCycle([3, 2, 0, -4], 1))) // true
  console.log(hasCycle(createLinkedListWithCycle([1], -1)))          // false
}

export { initSlowAndFastPointers }
