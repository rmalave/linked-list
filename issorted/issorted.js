function isSorted(list) {
  let current = list.head;
  console.log('head', current);

  if (current.value === null || current.next === null) {
    console.log('1 or less. sorted');
    return true;
  }

  while (current && current.next) {
    if (current.value > current.next.value) {
      return false;
    }
    current = current.next;
  }
  return true;
}
