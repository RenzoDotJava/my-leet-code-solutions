function getStartSum(p: number): number {
  return p * (p + 1) / 2
}

function getEndSum(p: number, n: number): number {
  return (n - p + 1) * (p + n) / 2
}

export function pivotInteger(n: number): number {
  let pivot = 1
  while (1) {
    if (getStartSum(pivot) === getEndSum(pivot, n)) return pivot
    if (pivot === n) return -1
    pivot++
  }

  return -1
};

export default pivotInteger;