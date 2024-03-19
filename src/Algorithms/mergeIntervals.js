// Merge Intervals

const initMergeIntervals = () => {
  function mergeIntervals(intervals) {
    if (!intervals || intervals.length === 0) {
      return []
    }

    // Sort intervals based on their start points
    intervals.sort((a, b) => a[0] - b[0])

    // Initialize the merged array with the first interval
    const merged = [intervals[0]]

    // Iterate through the intervals starting from the second one
    for (let i = 1; i < intervals.length; i++) {
      const [currentStart, currentEnd] = intervals[i]
      const [previousStart, previousEnd] = merged[merged.length - 1]

      // If current interval overlaps with the previous one, merge them
      if (currentStart <= previousEnd) {
        merged[merged.length - 1] = [
          previousStart,
          Math.max(previousEnd, currentEnd),
        ]
      } else {
        // If current interval doesn't overlap, add it to merged intervals
        merged.push([currentStart, currentEnd])
      }
    }

    return merged
  }

  console.log(
    mergeIntervals([
      [1, 4],
      [7, 9],
      [2, 5],
    ]),
  ) // [[1, 5], [7, 9]]

  console.log(
    mergeIntervals([
      [6, 7],
      [2, 4],
      [5, 9],
    ]),
  ) // [[2, 4], [5, 9]]

  console.log(
    mergeIntervals([
      [1, 4],
      [2, 6],
      [3, 5],
    ]),
  ) // [[1, 6]]
}

export { initMergeIntervals }
