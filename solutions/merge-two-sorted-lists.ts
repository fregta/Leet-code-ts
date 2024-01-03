type ListNode = {
    val: number;
    next: ListNode;
};

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    //define condition that should break the recursive function
    //If any of the lists are null, we should return the other list.
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    //check for bigger value and set the result of the recursive function to the next element of the list
    //that has the larger value
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
