/**
 * Stack implemented using a dynamic array.
 * Last In First Out (LIFO) structure.
 */
export class StackArray<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Push a value onto the top of the stack.
   * @param value - The value to be added.
   */
  push(value: T): void {
    this.items.push(value);
  }

  /**
   * Remove and return the top value from the stack.
   * @returns The removed value, or undefined if empty.
   */
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.items.pop();
  }

  /**
   * Peek at the top value without removing it.
   * @returns The value at the top, or undefined if empty.
   */
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.items[this.getSize() - 1];
  }

  /**
   * Get the current number of elements in the stack.
   * @returns Number of elements in the stack.
   */
  getSize(): number {
    return this.items.length;
  }

  /**
   * Check whether the stack is empty.
   * @returns True if the stack is empty.
   */
  isEmpty(): boolean {
    return this.getSize() === 0;
  }
}
