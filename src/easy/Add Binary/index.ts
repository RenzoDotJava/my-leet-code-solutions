//IMPROVE THIS SOLUTION

function addBinary(a: string, b: string): string {
  let i = 0;
  let aLen = a.length, bLen = b.length
  let maxLen = aLen > bLen ? aLen : bLen
  let next = '0'
  let result = []
  let aBin, bBin

  while (1) {
    if (next === '0' && i >= maxLen) break;

    if (aLen - 1 - i >= 0 && bLen - 1 - i >= 0) {
      aBin = a[aLen - 1 - i]
      bBin = b[bLen - 1 - i]

      if (aBin === '0' && bBin === '0' && next === '0') {
        result.unshift('0')
        next = '0'
      }
      else if (aBin === '1' && bBin === '0' && next === '0' ||
        aBin === '0' && bBin === '1' && next === '0' ||
        aBin === '0' && bBin === '0' && next === '1') {
        result.unshift('1')
        next = '0'
      }
      else if (aBin === '1' && bBin === '1' && next === '0' ||
        aBin === '1' && bBin === '0' && next === '1' ||
        aBin === '0' && bBin === '1' && next === '1') {
        result.unshift('0')
        next = '1'
      } else if (aBin === '1' && bBin === '1' && next === '1') {
        result.unshift('1')
        next = '1'
      }
    } else if (aLen - 1 - i >= 0) {
      aBin = a[aLen - 1 - i]

      if (aBin === '0' && next === '0') {
        result.unshift('0')
        next = '0'
      }
      else if (aBin === '1' && next === '0' || aBin === '0' && next === '1') {
        result.unshift('1')
        next = '0'
      }
      else if (aBin === '1' && next === '1') {
        result.unshift('0')
        next = '1'
      }
    } else if (bLen - 1 - i >= 0) {
      bBin = b[bLen - 1 - i]

      if (bBin === '0' && next === '0') {
        result.unshift('0')
        next = '0'
      }
      else if (bBin === '1' && next === '0' || bBin === '0' && next === '1') {
        result.unshift('1')
        next = '0'
      }
      else if (bBin === '1' && next === '1') {
        result.unshift('0')
        next = '1'
      }
    } else {
      result.unshift(next)
      next = '0'
    }
    i++
  }

  return result.join('')
};

export default addBinary;