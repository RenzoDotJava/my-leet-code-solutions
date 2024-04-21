function mySqrt(x: number): number {
  let start = 0;
  let end = x;
  let mid = -1;

  if (x === 0 || x === 1) return x

  while (start <= end) {
    mid = Math.floor((end + start) / 2);

    if (mid * mid == x) return mid;
    else if (mid * mid > x) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return end
};

export default mySqrt;