export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  if (!list1 && !list2) return null;

  let newList: ListNode = new ListNode();

  let pointer1 = list1;
  let pointer2 = list2;
  let pointer3: ListNode | null = newList;
  let nextVal = 0;
  let flag = true;

  while (pointer1 || pointer2) {
    if (pointer1 && pointer2) {
      if (pointer1.val > pointer2.val) {
        nextVal = pointer2.val
        pointer2 = pointer2.next
      }
      else {
        nextVal = pointer1.val
        pointer1 = pointer1.next
      }


    } else if (pointer1) {
      nextVal = pointer1.val
      pointer1 = pointer1.next
    } else if (pointer2) {
      nextVal = pointer2.val
      pointer2 = pointer2.next
    }

    if (flag) {
      pointer3.val = nextVal
      flag = false
    }
    else {
      pointer3.next = new ListNode(nextVal)
      pointer3 = pointer3.next
    }
  }

  return newList;
};

export default mergeTwoLists;