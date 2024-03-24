function strStr(haystack: string, needle: string): number {
  let stack: number[] = []
  let i = 0, j = 0

  if (haystack.length < needle.length) return -1

  while (i < haystack.length && j < needle.length) {
    if (stack.length === 0 && haystack.length - i < needle.length) return -1
    if (haystack[i] === needle[j]) {
      if (stack[0] !== i && needle[0] === haystack[i]) stack.push(i)
      j++
    } else if (stack.length > 0) {
      j = 0
      stack.shift()
      if (stack.length > 0) i = stack[0]
      i--
    }
    i++
  }

  return stack.length > 0 ? stack[0] : -1
};

/* function strStr(haystack: string, needle: string): number {
  for (let i = 0, j = needle.length; j <= haystack.length; i++, j++) {
    if (haystack.substring(i, j) === needle) return i
  }
  return -1
}; */

export default strStr