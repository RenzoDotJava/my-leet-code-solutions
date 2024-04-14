function plusOne(digits: number[]): number[] {
  let auxDigits = [...digits]
  let i = digits.length - 1;

  while (1) {
    if (digits[i] === 9) {
      auxDigits[i] = 0
      if (i === 0) {
        auxDigits.unshift(1)
        break;
      }
      else i--
    }
    else {
      auxDigits[i] = digits[i] + 1
      break;
    }
  }

  return auxDigits;
};

export default plusOne;