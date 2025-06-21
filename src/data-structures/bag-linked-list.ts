// Internal node structure for the linked list implementation
class Node<T> {
  _value: T;
  _next: Node<T> | null;

  constructor(value: T) {
    this._value = value;
    this._next = null;
  }

  value() {
    return this._value;
  }

  next() {
    return this._next;
  }

  hasNext() {
    return Boolean(this._next);
  }

  append(next: Node<T> | null) {
    this._next = next;
  }
}

export class BagLinkedList<T> {
  // Head pointer for the linked list; null when empty
  private head: Node<T> | null = null;

  /**
   * Insert an item into the bag.
   * Inserts at the end or beginning—your choice—as long as duplicates are allowed.
   * @param item - The item to insert
   */
  insert(item: T): void {
    // newer item -> new item -> head
    // const oldHead = this.head;
    // const newNode = new Node(item);

    // newNode.append(oldHead);
    // this.head = newNode;

    // ---

    // head -> new item -> newer item
    let currentNode = this.head;
    const newNode = new Node(item);

    // if list is empty
    if (!currentNode) {
      this.head = newNode;
      return;
    }

    // traverse to end of list
    while (currentNode && currentNode.hasNext()) {
      currentNode = currentNode.next()!;
    }

    currentNode.append(newNode);
  }

  /**
   * Traverse the bag and return all items.
   * Order is based on your insertion strategy (for example, insertion at head may reverse the order).
   * @returns An array of all items in the bag
   */
  traverse(): T[] {
    const nodeValues: T[] = [];
    let currentNode = this.head;

    while (currentNode) {
      nodeValues.push(currentNode.value());
      currentNode = currentNode.next();
    }

    return nodeValues;
  }
}
