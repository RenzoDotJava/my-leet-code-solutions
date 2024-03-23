import mergeTwoLists, { ListNode } from "./easy/Merge Two Sorted Lists";

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

let newList = mergeTwoLists(list1, list2)

//print values of newList
while (newList) {
  console.log(newList.val)
  newList = newList.next
}