const hashMap = () => {
  // getMaxCharCount

  function getMaxCharCount(str) {
    // Create an empty hashmap to store character counts
    const map = {}

    // Iterate through the string and count occurrences of each character
    for (let char of str) {
      if (map[char]) {
        map[char]++
      } else {
        map[char] = 1
      }
    }

    // Find the character with the maximum count
    let maxChar = ''
    let maxCount = 0

    for (let char in map) {
      if (map[char] > maxCount) {
        maxChar = char
        maxCount = map[char]
      }
    }

    // Return the result as an object
    return { char: maxChar, count: maxCount }
  }

  // Example usage
  console.log(getMaxCharCount('aaaabbbbsssccddbbbbc'))

  // aaaabbbbsssccddbbbbc

  // { "char": "b", "count": 8}
}
