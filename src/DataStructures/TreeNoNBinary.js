const initTree = () => {
  class TreeNode {
    constructor (data) {
      this.data = data
      this.children = []
    }

    addChild(childNode) {
      this.children.push(childNode)
    }
  }

  class Tree {
    constructor() {
      this.root = null
    }

    addRoot(data) {
      this.root = new TreeNode(data)
    }

    remove(data) {
      if (!this.root) {
        return null
      }

      if (this.root.data === data) {
        this.root = null
        return
      }

      const removeNode = (node, targetData) => {
        node.children = node.children.filter((child) => child.data !== targetData)
        node.children.forEach((child) => removeNode(child, targetData)) 
      }

      removeNode(this.root, data)
    }

    traverseBFS(callback) {
      if (!this.root) {
        return
      }

      const queue = [this.root]

      while (queue.length > 0) {
        const currentNode = queue.shift()
        callback(currentNode.data)

        currentNode.children.forEach((child) => queue.push(child))
      }
    }

    traverseDFS(callback, method = 'pre-order') {
      const traversePreOrder = (node) => {
        callback(node.data)
        node.children.forEach(traversePreOrder)
      }

      const traversePostOrder = (node) => {
        node.children.forEach(traversePostOrder)
        callback(node.data)
      }

      if (!this.root) {
        return
      }

      if (method === 'pre-order') {
        traversePreOrder(this.root)
      } else if (method === 'post-order') {
        traversePostOrder(this.root)
      }
    }
  }

  // Example usage:

  // Create a tree
  const myTree = new Tree()

  // Add a root node
  myTree.addRoot('Root Node')

  // Add children to the root
  const child1 = new TreeNode('Child 1')
  const child2 = new TreeNode('Child 2')
  myTree.root.addChild(child1)
  myTree.root.addChild(child2)

  // Add children to Child 1
  const child1_1 = new TreeNode('Child 1.1')
  const child1_2 = new TreeNode('Child 1.2')
  child1.addChild(child1_1)
  child1.addChild(child1_2)

  // Add a child to Child 2
  const child2_1 = new TreeNode('Child 2.1')
  child2.addChild(child2_1)

  // The resulting tree structure looks like this:
  //          Root Node
  //         /         \
  //    Child 1   Child 2
  //   /   |   \       \
  //  ... ... ...    Child 2.1

  console.log(myTree)

  // Remove a child
  myTree.remove('Child 1.1')

  // Traversal

  // Breadth-First Traversal
  console.log('Breadth-First Traversal:')
  myTree.traverseBFS((data) => console.log(data))
  // Root Node
  // Child 1
  // Child 2
  // Child 1.2
  // Child 2.1 

  // Pre-Order Traversal
  console.log('Pre-Order Traversal:')
  myTree.traverseDFS((data) => console.log(data), 'pre-order')
  // Root Node
  // Child 1
  // Child 1.2
  // Child 2
  // Child 2.1

  // Post-Order Traversal
  console.log('Post-Order Traversal:')
  myTree.traverseDFS((data) => console.log(data), 'post-order')
  // Child 1.2
  // Child 1
  // Child 2.1
  // Child 2
  // Root Node
}

export { initTree }
