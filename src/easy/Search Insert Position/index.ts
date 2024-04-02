function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1
  let middle = Math.floor((end + start) / 2)

  if (nums[0] > target) return 0
  else if (nums[end] < target) return end + 1

  while (1) {
    if (target >= nums[start] && target < nums[middle]) end = middle
    else if (target > nums[middle] && target <= nums[end]) start = middle

    middle = Math.floor((end + start) / 2)

    if (nums[middle] === target) return middle
    else if (start === middle) return end
    else if (end === middle) return start
  }

  return -1
};

//OTHER SOLUTION (SAME TIME, LESS CODE)
/* function searchInsert(nums: number[], target: number): number {
  let start = 0, mid
  let end = nums.length - 1

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid
    else if (nums[mid] < target) start = mid + 1
    else end = mid - 1
  }

  return end + 1
}; */

export default searchInsert