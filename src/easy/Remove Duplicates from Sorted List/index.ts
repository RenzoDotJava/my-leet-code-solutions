class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {

  let aux = head;
  let left = aux
  let right = left?.next;

  while (1) {

    if (!right) break;

    if (left?.val === right.val) left.next = right.next
    else left = left?.next!

    right = right.next!
  }

  return aux
};

export { ListNode };

export default deleteDuplicates;