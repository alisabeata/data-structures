// Two Pointers Algorithm

const initTwoPointers = () => {
  // works with sorted arr
  function findSumOfPair(arr, target) {
    // Initialize pointers at the beginning and end of the array
    let left = 0
    let right = arr.length - 1
    // Initialize variable to store the pair
    let pair = null
    // Initialize variable to store the sum of elements at the pointers
    let sum

    // Loop until the pointers meet
    while (left !== right) {
      // Calculate the sum of elements at the current pointers
      sum = arr[left] + arr[right]

      // If the sum matches the target, store the pair and exit the loop
      if (sum === target) {
        pair = [arr[left], arr[right]]
        break
      }
      // If the sum is less than the target, move the left pointer to the right
      else if (sum < target) {
        left++
      }
      // If the sum is greater than the target, move the right pointer to the left
      else if (sum > target) {
        right--
      }
    }

    // Return the pair
    return pair
  }

  console.log(findSumOfPair([1, 2, 3, 4, 5], 7)) // [2, 5]
  console.log(findSumOfPair([1, 6, 8, 9, 10], 14)) // [6, 8]
  console.log(findSumOfPair([1, 3, 4, 6, 8, 10], 12)) // [4, 8]
  console.log(findSumOfPair([1, 2, 3, 4, 5], 10)) // null

  // isPalindrome
  function isPalindrome(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = str.length - 1

    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }

      right--
      left++
    }

    return true
  }

  console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
  console.log(isPalindrome('race a car')) // false
  console.log(isPalindrome(' ')) // true
}

export { initTwoPointers }
