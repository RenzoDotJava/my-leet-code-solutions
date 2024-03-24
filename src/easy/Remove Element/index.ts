function removeElement(nums: number[], val: number): number {
  let i = 0, count = 0, j, aux;

  while (i < nums.length) {
    if (nums[i] === val) {
      j = i + 1;
      while (1) {
        if (j === nums.length) {
          return count;
        }
        if (nums[j] !== val) {
          aux = nums[j]
          nums[j] = nums[i]
          nums[i] = aux
          count++
          break;
        }
        j++
      }
    }
    else count++
    i++
  }
  return count
};

//BETTER SOLUTION (NOT MINE)
/* function removeElement(nums: number[], val: number): number {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
 */
export default removeElement;