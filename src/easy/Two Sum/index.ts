function twoSum(nums: number[], target: number): number[] {
  const hashMap: { [key: number]: number } = {};
  let diff

  for (let i = 0; i < nums.length; i++) hashMap[nums[i]] = i

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i]
    if (hashMap[diff] && hashMap[diff] !== i) return [i, hashMap[diff]]
  }

  return []
};

export default twoSum;