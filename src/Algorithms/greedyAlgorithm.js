// Greedy Algorithm

const initGreedyWindow = () => {
  const productExceptSelf = function (nums) {
    const before = []
    let beforeProduct = 1
    for (let i = 0; i < nums.length; i++) {
      before[i] = beforeProduct
      beforeProduct *= nums[i]
    }

    const after = []
    let afterProduct = 1
    for (let j = nums.length - 1; j > -1; j--) {
      after[j] = afterProduct
      afterProduct *= nums[j]
    }

    const res = []
    for (let k = 0; k < nums.length; k++) {
      res[k] = before[k] * after[k]
    }

    return res
  }

  console.log(productExceptSelf([1, 2, 3, 4]))
}

export { initGreedyWindow }
