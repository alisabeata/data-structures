// Sliding Window Algorithm

const initSlidingWindow = () => {
  function averageSubArrays(arr, k) {
    const averages = []
    let start = 0
    let sum = 0

    for (let end = 0; end < arr.length; end++) {
      sum += arr[end]
      
      if (end >= k - 1) {
        // add the average of the current window to averages[]
        averages.push(sum / k)

        // subtract the element at the start from the sum
        sum -= arr[start]

        // move the window start one spot
        start++
      }
    }

    return averages
  }

  console.log(averageSubArrays([1, 2, 3, 4, 5], 3))
  // [2, 3, 4]
  console.log(averageSubArrays([1, 6, 3, -1, 8, 4, 5, 3, 2], 5))
  // [3.4, 4, 3.8, 3.8, 4.4]
}

export { initSlidingWindow }
