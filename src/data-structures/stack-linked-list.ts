/**
 * Node used internally by StackLinkedList.
 */
class StackNode<T> {
  _value: T;
  _next: StackNode<T> | null;

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

  append(next: StackNode<T> | null) {
    this._next = next;
  }
}

/**
 * Stack implemented using a singly linked list.
 * Last In First Out (LIFO) structure.
 */
export class StackLinkedList<T> {
  private head: StackNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Push a value onto the top of the stack.
   * @param value - The value to be added to the stack.
   */
  push(value: T): void {
    const oldHead = this.head;
    const newNode = new StackNode(value);

    newNode.append(oldHead);
    this.head = newNode;
    this.size++;
  }

  /**
   * Remove and return the top value from the stack.
   * @returns The value removed, or null if the stack is empty.
   */
  pop(): T | null {
    const oldHead = this.head;

    if (this.isEmpty()) return null;

    this.head = oldHead!.next();
    this.size--;

    return oldHead!.value();
  }

  /**
   * Peek at the top value without removing it.
   * @returns The value at the top, or null if the stack is empty.
   */
  peek(): T | null {
    const headNode = this.head;

    if (this.isEmpty()) return null;
    return headNode!.value();
  }

  /**
   * Get the current number of elements in the stack.
   * @returns Number of elements in the stack.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Check whether the stack is empty.
   * @returns True if the stack has no elements.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}
