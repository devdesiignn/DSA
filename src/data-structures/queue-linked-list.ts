/**
 * Node used internally by QueueLinkedList.
 */
class QueueNode<T> {
  _value: T;
  _next: QueueNode<T> | null;

  constructor(value: T) {
    this._value = value;
    this._next = null;
  }

  value(): T {
    return this._value;
  }

  next(): QueueNode<T> | null {
    return this._next;
  }

  append(next: QueueNode<T> | null): void {
    this._next = next;
  }
}

/**
 * Queue implemented using a singly linked list.
 * First In First Out (FIFO) structure.
 */
export class QueueLinkedList<T> {
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Add a value to the end of the queue.
   * @param value - The value to enqueue.
   */
  enqueue(value: T): void {
    const newNode = new QueueNode(value);

    // if the list is empty
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    }

    // old tail -> new node (new tail)
    this.tail!.append(newNode);
    this.tail = newNode;
    this.size++;
  }

  /**
   * Remove and return the value from the front of the queue.
   * @returns The value removed, or null if the queue is empty.
   */
  dequeue(): T | null {
    // if empty list
    if (this.isEmpty()) return null;

    const oldHead = this.head!;
    this.head = oldHead.next();

    // If the queue is now empty, clear tail too
    if (!this.head) this.tail = null;
    this.size--;

    return oldHead.value();
  }

  /**
   * Peek at the front value without removing it.
   * @returns The front value, or null if the queue is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.head!.value();
  }

  /**
   * Get the current number of elements in the queue.
   * @returns Number of elements in the queue.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Check whether the queue is empty.
   * @returns True if the queue has no elements.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}
