const initBinaryTree = () => {
  class TreeNode {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null
    }

    insert(value) {
      this.root = this._insert(this.root, value)
    }

    _insert(root, value) {
      if (root === null) {
        return new TreeNode(value)
      }

      if (value < root.value) {
        root.left = this._insert(root.left, value)
      } else if (value > root.value) {
        root.right = this._insert(root.right, value)
      }

      return root
    }

    remove(value) {
      this.root = this._remove(this.root, value)
    }

    _remove(root, value) {
      if (root === null) {
        return null
      }

      if (value < root.value) {
        root.left = this._remove(root.left, value)
      } else if (value > root.value) {
        root.right = this._remove(root.right, value)
      } else {
        if (root.left === null) {
          return root.right
        } else if (root.right === null) {
          return root.left
        }

        root.value = this._minValueNode(root.right)

        root.right = this._remove(root.right, root.value)
      }

      return root
    }

    _minValueNode(node) {
      let current = node

      while (current.left != null) {
        current = current.left
      }

      return current.value
    }

    inOrder(node, callback) {
      if (node !== null) {
        this.inOrder(node.left, callback)
        callback(node.value)
        this.inOrder(node.right, callback)
      }
    }

    preOrder(node, callback) {
      if (node != null) {
        callback(node.value)
        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
      }
    }

    postOrder(node, callback) {
      if (node != null) {
        this.postOrder(node.left, callback)
        this.postOrder(node.right, callback)
        callback(node.value)
      }
    }

    traverseDFS(callback, order = 'in-order') {
      if (order === 'in-order') {
        this.inOrder(this.root, callback)
      } else if (order === 'pre-order') {
        this.preOrder(this.root, callback)
      } else if (order === 'post-order') {
        this.postOrder(this.root, callback)
      } else {
        console.log('Invalid traverse order')
      }
    }

    traverseBFS(callback) {
      if (!this.root) {
        return
      }

      const queue = [this.root]

      while (queue.length > 0) {
        const node = queue.shift()
        callback(node.value)

        if (node.left) {
          queue.push(node.left)
        }

        if (node.right) {
          queue.push(node.right)
        }
      }
    }

    contains(node = this.root, value) {
      if (node === null) {
        return false
      }

      if (value === node.value) {
        return true
      } else if (value < node.value) {
        return this.contains(node.left, value)
      } else {
        return this.contains(node.right, value)
      }
    }
  }

  // Example usage:
  const tree = new BinaryTree()
  tree.insert(10)
  tree.insert(5)
  tree.insert(15)
  tree.insert(3)
  tree.insert(7)
  tree.insert(66)

  tree.remove(66)

  console.log(tree.contains(5))

  // Tree visualization:
  //     10
  //    /  \\
  //   5    15
  //  / \\
  // 3   7

  console.log('In-order DFS traversal:')
  tree.traverseDFS((value) => console.log(value), 'in-order') // 3, 5, 7, 10, 15

  console.log('\nPre-order DFS traversal:')
  tree.traverseDFS((value) => console.log(value), 'pre-order') // 10, 5, 3, 7, 15

  console.log('\nPost-order DFS traversal:')
  tree.traverseDFS((value) => console.log(value), 'post-order') // 3, 7, 5, 15, 10

  console.log('BFS Traversal:')
  tree.traverseBFS((value) => console.log(value)) // 10, 5, 15, 3, 7
}

export { initBinaryTree }
