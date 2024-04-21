function climbStairs(n: number): number {

  let map: { [key: number]: number } = {
    0: 1
  };

  const countSteps = (n: number) => {

    if (map[n]) return map[n]
    else if (n < 0) return 0

    let x = 0, y = 0

    x = countSteps(n - 1)
    y = countSteps(n - 2)

    return x + y;
  }

  for (let i = 1; i <= n; i++) {
    map[i] = countSteps(i)
  }

  return map[n]
};

export default climbStairs;