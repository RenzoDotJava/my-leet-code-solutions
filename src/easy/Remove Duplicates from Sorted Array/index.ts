function removeDuplicates(nums: number[]): number {
  let uniq = 0, curr = 1;

  while (curr < nums.length) {
    if (nums[curr] === nums[uniq]) curr++
    else {
      uniq++
      nums[uniq] = nums[curr]
      curr++
    }
  }

  return uniq + 1
};

export default removeDuplicates;