class Node<T> {
  private _value: T;
  private _next: Node<T> | null = null;
  private _prev: Node<T> | null = null;

  constructor(value: T) {
    this._value = value;
  }

  value(): T {
    return this._value;
  }

  next(): Node<T> | null {
    return this._next;
  }

  prev(): Node<T> | null {
    return this._prev;
  }

  setNext(node: Node<T> | null): void {
    this._next = node;
  }

  setPrev(node: Node<T> | null): void {
    this._prev = node;
  }
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  /**
   * Insert a value in sorted order.
   * - If list is empty, becomes head and tail.
   * - If value is less than head, insert at front.
   * - If value is greater than tail, insert at end.
   * - Else insert between two nodes.
   * @param value - value to insert
   */
  insert(value: T): void {
    let headNode = this.head;
    let tailNode = this.tail;
    let previousNode: Node<T> | null = null;
    const newNode = new Node(value);

    // If list is empty, becomes head and tail.
    if (!headNode && !tailNode) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // If value is less than head, insert at front.
    if (headNode && headNode.value() >= value) {
      newNode.setNext(headNode);
      headNode.setPrev(newNode);
      this.head = newNode;
      return;
    }

    // If value is greater than tail, insert at end.
    if (tailNode && tailNode.value() <= value) {
      tailNode.setNext(newNode);
      newNode.setPrev(tailNode);
      this.tail = newNode;
      return;
    }

    // Else insert between two nodes.
    while (headNode) {
      if (headNode.value() > value) {
        const previousNode = headNode.prev(); // node before headNode

        if (previousNode) previousNode.setNext(newNode);
        newNode.setNext(headNode);

        // prev -> new -> head
        // head <- new <- prev
        newNode.setPrev(previousNode);
        headNode.setPrev(newNode);

        return;
      }

      headNode = headNode.next();
    }
  }

  /**
   * Traverse the list and return all values.
   * @returns Array of values in order
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
   * Delete a node with the given value.
   * @param value - value to delete
   */
  delete(value: T): void {
    // TODO: Implement delete logic
    let currentNode = this.head;
    let previousNode: Node<T> | null = null;

    // if list is empty
    if (!currentNode) return;

    // if deleting head node
    if (currentNode.value() === value) {
      this.head = currentNode.next();
      if (this.head) this.head.setPrev(null);
      else this.tail = null;
      return;
    }

    while (currentNode) {
      if (currentNode.value() === value) {
        const nextNode = currentNode.next();
        previousNode!.setNext(nextNode);

        if (nextNode) nextNode.setPrev(previousNode);
        else this.tail = previousNode;

        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next();
    }
  }

  /**
   * Concatenate another doubly linked list at the end of this list.
   * @param other - another DoublyLinkedList
   */
  concatenate(other: DoublyLinkedList<T>): void {
    const tailNode = this.tail;
    const headNode = this.head;
    const otherHead = other.head;
    const otherTail = other.tail;

    // if other list is empty — nothing to do
    if (!otherHead) return;

    // if this list  is empty - adopt the other list entirely
    if (!headNode) {
      this.head = otherHead;
      this.tail = otherTail;
      return;
    }

    // this tail -> other head
    // this tail <- other head
    tailNode!.setNext(otherHead);
    otherHead.setPrev(tailNode);

    this.tail = otherTail;
  }

  /**
   * Search for a node with the given value.
   * @param value - value to find
   * @returns Node or null
   */
  private search(value: T): Node<T> | null {
    let headNode = this.head;
    let tailNode = this.tail;

    while (
      headNode &&
      tailNode &&
      headNode !== tailNode &&
      headNode.next() !== tailNode
    ) {
      if (headNode.value() === value) return headNode;
      if (tailNode.value() === value) return tailNode;

      headNode = headNode.next();
      tailNode = tailNode.prev();
    }

    // If single or middle node in list
    if (headNode && headNode.value() === value) return headNode;
    if (tailNode && tailNode.value() === value) return tailNode;

    return null;
  }
}
