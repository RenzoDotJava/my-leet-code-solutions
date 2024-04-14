function lengthOfLastWord(s: string): number {
  let index = s.length - 1
  let lastChar, count = 0
  while (1) {
    lastChar = s[index]
    if (count > 0 && lastChar === ' ' || index < 0) break;
    else if (lastChar !== ' ') count++
    index--
  }

  return count
};

/* function lengthOfLastWord(s: string): number {
  const words = s.trim().split(' ');

  return words[words.length - 1].length;
};
 */

export default lengthOfLastWord;