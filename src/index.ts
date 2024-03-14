import removeNthFromEnd, { ListNode } from "./medium/Remove Nth Node From End of List"

let listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log('Output: ' + removeNthFromEnd(listNode, 2))