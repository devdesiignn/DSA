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

export class SinglyLinkedList<T> {
  private head: Node<T> | null = null;

  /**
   * Insert a node at the end of the list
   * @param value - value to insert
   */
  insertAtEnd(value: T): void {
    let currentNode = this.head;
    const newNode = new Node(value);

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
   * Insert a node at the front of the list
   * @param value - value to insert
   */
  insertAtFront(value: T): void {
    const oldHead = this.head;
    const newNode = new Node(value);

    newNode.append(oldHead);
    this.head = newNode;
  }

  /**
   * Delete a node by value
   * Handles deleting head, tail, or middle nodes
   * @param value - value to delete
   */
  delete(value: T): void {
    let currentNode = this.head;
    let previousNode = null;

    // if list is empty
    if (!currentNode) return;

    // if deleting head node
    if (currentNode.value() === value) {
      this.head = currentNode.next();
      return;
    }

    while (currentNode) {
      if (currentNode.value() === value) {
        previousNode!.append(currentNode.next());
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next();
    }
  }

  /**
   * Traverse the list from head to tail and return array of values
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

  /**
   * Search for a node by value
   * @param value - value to search for
   * @returns Node or null
   */
  private search(value: T): Node<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value() === value) return currentNode;
      currentNode = currentNode.next();
    }

    return null;
  }
}
