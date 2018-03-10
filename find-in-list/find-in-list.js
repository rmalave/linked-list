function contains(list, value) {
  let current = list.head;

  while(current) {

    if(current.value === value) {
      return true;
    }
    current = current.next;
  }

  return false;
}
