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

import findMinArrowShots from "./medium/Minimum Number of Arrows to Burst Balloons"

let arr = [[9, 12], [1, 10], [4, 11], [8, 12], [3, 9], [6, 9], [6, 7]]

console.log(findMinArrowShots(arr))