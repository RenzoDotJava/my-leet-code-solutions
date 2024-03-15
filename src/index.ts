/* import removeNthFromEnd, { ListNode } from "./medium/Remove Nth Node From End of List" */

/* let listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))) */
/* let listNode = new ListNode(1, new ListNode(2)) */
/* let listNode = new ListNode(1) */
/* let listNode = new ListNode(1, new ListNode(2, new ListNode(3))) */

/* let head = removeNthFromEnd(listNode, 3)
console.log('-------')
while (head) {
  console.log(head.val)
  head = head.next!
} */

import numSubarraysWithSum from "./medium/Binary Subarrays With Sum";

console.log(numSubarraysWithSum([1, 1, 1, 1, 0, 0, 1], 3))