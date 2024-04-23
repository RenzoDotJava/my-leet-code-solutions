import deleteDuplicates, { ListNode } from "./easy/Remove Duplicates from Sorted List";

const node1 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

console.log(deleteDuplicates(node1));