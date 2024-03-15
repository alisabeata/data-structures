// Binary Search

const initBinarySearch = () => {
  function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target) {
        return mid
      } else if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return -1
  }

  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const targetElement = 7

  const result = binarySearch(sortedArray, targetElement)

  if (result !== -1) {
    console.log(`${targetElement} found at index ${result}`)
  } else {
    console.log(`${targetElement} not found in the array`)
  }
}

export { initBinarySearch }
