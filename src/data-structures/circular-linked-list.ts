class Node<T> {
  private _value: T;
  private _next: Node<T> | null = null;

  constructor(value: T) {
    this._value = value;
  }

  value(): T {
    return this._value;
  }

  next(): Node<T> | null {
    return this._next;
  }

  setNext(next: Node<T> | null): void {
    this._next = next;
  }
}

export class CircularLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  /**
   * Insert a value at the end of the circular list
   * - First node should point to itself
   * - Tail always points back to head
   * @param value - value to insert
   */
  insert(value: T): void {
    const newNode = new Node(value);

    const headNode = this.head;
    const tailNode = this.tail;

    // if first node should point to itself
    if (!headNode) {
      this.head = newNode;
      this.tail = newNode;

      newNode.setNext(newNode);
      return;
    }

    // old tail -> new node -> old head
    tailNode!.setNext(newNode);
    newNode.setNext(headNode);

    this.tail = newNode;
  }

  /**
   * Traverse the list for a certain number of steps
   * Useful for confirming circular nature
   * @param steps - how many nodes to read
   * @returns array of values read in circular order
   */
  traverse(steps: number): T[] {
    const nodeValues: T[] = [];
    let currentNode = this.head;

    // return early if empty list
    if (!currentNode || steps <= 0) return nodeValues;

    for (let counter = 1; counter <= steps; counter++) {
      nodeValues.push(currentNode!.value());
      currentNode = currentNode!.next();
    }

    return nodeValues;
  }
}
