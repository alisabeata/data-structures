// Sliding Window Algorithm

const initSlidingWindow = () => {
  function averageSubArrays(arr, k) {
    // Array to store averages of subarrays
    const averages = []
    // Pointer to the start of the current window
    let start = 0
    // Variable to store the sum of elements in the current window
    let sum = 0

    // Loop through the array with the end pointer
    for (let end = 0; end < arr.length; end++) {
      // Add the current element to the sum
      sum += arr[end]

      // If the window size is equal to k
      if (end >= k - 1) {
        // Calculate the average of the current window and push it to averages[]
        averages.push(sum / k)

        // Subtract the element at the start of the window from the sum
        sum -= arr[start]

        // Move the window start one position to the right
        start++
      }
    }

    // Return the array of averages
    return averages
  }

  console.log(averageSubArrays([1, 2, 3, 4, 5], 3))
  // [2, 3, 4]
  console.log(averageSubArrays([1, 6, 3, -1, 8, 4, 5, 3, 2], 5))
  // [3.4, 4, 3.8, 3.8, 4.4]

  // minSubArrayLen
  function minSubArrayLen(nums, target) {
    // Initialize minLength to the maximum safe integer value
    let minLength = Number.MAX_SAFE_INTEGER
    // Initialize the sum of elements in the current window to 0
    let sum = 0
    // Initialize the left pointer of the window to 0
    let left = 0

    // Iterate through the array using the right pointer
    for (let right = 0; right < nums.length; right++) {
      // Add the current element to the sum
      sum += nums[right]

      // Check if the sum of elements in the window is greater than or equal to the target
      while (sum >= target) {
        // Update minLength to the minimum of its current value and the length of the current window
        minLength = Math.min(minLength, right - left + 1)
        // Move the left pointer to the right to shrink the window
        sum -= nums[left]
        left++
      }
    }

    // If minLength is still equal to its initial value, no valid subarray was found, return 0, else return minLength
    return minLength !== Number.MAX_SAFE_INTEGER ? minLength : 0
  }

  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2
  console.log(minSubArrayLen([1, 4, 4], 4)) // 1
  console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)) // 0
}

export { initSlidingWindow }
