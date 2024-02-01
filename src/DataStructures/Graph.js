const initGraph = () => {
  class Graph {
    constructor() {
      this.adjacencyList = {}
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = []
      }
    }

    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
        console.error('Invalid vertex')
        return
      }

      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2,
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1,
      )
    }

    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        console.error('Vertex does not exist')
        return
      }

      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop()
        this.removeEdge(vertex, adjacentVertex)
      }

      delete this.adjacencyList[vertex]
    }

    traverseBFS(start) {
      const queue = [start]
      const result = []
      const visited = {}
      let currentVertex

      visited[start] = true

      while (queue.length) {
        currentVertex = queue.shift()
        result.push(currentVertex)

        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true
            queue.push(neighbor)
          }
        })
      }

      return result
    }

    traverseDFS(start) {
      const result = []
      const visited = {}
      const adjacencyList = this.adjacencyList

      function dfs(vertex) {
        if (!vertex) {
          return null
        }

        visited[vertex] = true
        result.push(vertex)
        
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfs(neighbor)
          }
        })
      }

      dfs(start)

      return result
    }

    printGraph() {
      for (const vertex in this.adjacencyList) {
        const neighbors = this.adjacencyList[vertex]
        console.log(`${vertex} -> ${neighbors.join(', ')}`)
      }
    }
  }

  // Example usage
  const graph = new Graph()

  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')

  graph.addEdge('A', 'B')
  graph.addEdge('B', 'C')
  graph.addEdge('C', 'D')
  graph.addEdge('D', 'A')

  /*
  Graph Visualization:
  A -------- B
  |          |
  |          |
  D -------- C
*/

  graph.printGraph()
  // Output:
  // A -> B, D
  // B -> A, C
  // C -> B, D
  // D -> C, A

  // Traverse
  console.log('BFS:', graph.traverseBFS('A')) // Example BFS starting from vertex 'A'
  // Output: ['A', 'B', 'D', 'C']
  console.log('DFS:', graph.traverseDFS('A')) // Example DFS starting from vertex 'A'
  // Output: ['A', 'B', 'C', 'D']

  console.log('Before removal:', graph.adjacencyList)
  graph.removeVertex('C')
  console.log('After removing vertex C:', graph.adjacencyList)
  graph.removeEdge('A', 'B')
  console.log('After removing edge between A and B:', graph.adjacencyList)

  graph.printGraph()
  // Output:
  // A -> D
  // B ->
  // D -> A
}

export { initGraph }
