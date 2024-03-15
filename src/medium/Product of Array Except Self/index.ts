function productExceptSelf(nums: number[]): number[] {
  let ans = new Array<number>(nums.length).fill(1);
  let aux = 1;

  for (let i = nums.length - 2; i >= 0; i--) ans[i] = ans[i + 1] * nums[i + 1];

  for (let j = 1; j < nums.length; j++) {
    aux *= nums[j - 1];
    ans[j] *= aux;
  }

  return ans
};

export default productExceptSelf;