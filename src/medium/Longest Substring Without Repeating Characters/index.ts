const getChar = (s: string): string => s !== ' ' ? s : 'space';

function lengthOfLongestSubstring(s: string): number {
  const arr = s.split('');
  let newArr = [...arr]
  let count = 0, auxCount = 0;
  let map: { [key: string]: string } = {};

  for (let i = 0; i < arr.length; i++) {
    let newArrLength = newArr.length;

    for (let j = 0; j < newArrLength; j++) {
      let char = getChar(newArr[j])

      if (!map[char]) {
        auxCount++;
        map[char] = char;
      } else break;
    }

    if (auxCount > count) count = auxCount;
    auxCount = 0;
    map = {};

    newArr = newArr.slice(1);
  }
  return count;
};

//BETTER SOLUTION
/* function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}; */

export default lengthOfLongestSubstring;