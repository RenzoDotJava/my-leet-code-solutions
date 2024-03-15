export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
//TODO
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 0;
  let current = head
  let prev = head

  while (1) {
    if (!prev) break;

    if (!current?.next) {
      if (count === 0 && n === 1) head = null
      else if (count + 1 === n) head = new ListNode(current?.val, current?.next)
      else prev.next = n !== 1 ? current : null
      break;
    }
    else {
      if (count === n) {
        prev = prev.next
      } else count++ //1

      current = current.next
    }
  }

  return head;
};

export default removeNthFromEnd;