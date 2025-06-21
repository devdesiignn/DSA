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

export class SortedLinkedList<T> {
  private head: Node<T> | null = null;

  /**
   * Insert a node in sorted order (ascending)
   * Handles inserting at the beginning, middle, or end
   * @param value - value to insert
   */
  insert(value: T): void {
    let currentNode = this.head;
    let previousNode: Node<T> | null = null;
    const newNode = new Node(value);

    // if list is empty or insert at head
    if (!currentNode || currentNode.value() >= value) {
      newNode.append(currentNode);
      this.head = newNode;
      return;
    }

    // sorted insert
    while (currentNode && currentNode.value() < value) {
      previousNode = currentNode;
      currentNode = currentNode.next();
    }

    newNode.append(currentNode);
    previousNode!.append(newNode);
  }

  /**
   * Traverse the list and return array of values
   * @returns array of values
   */
  traverse(): T[] {
    const nodeValues = [];
    let currentNode = this.head;

    while (currentNode) {
      nodeValues.push(currentNode.value());
      currentNode = currentNode.next();
    }

    return nodeValues;
  }
}
