export class BagArray<T> {
  // Internal storage using an array
  private items: T[] = [];

  constructor() {
    this.items = [];
  }

  /**
   * Insert an item into the bag.
   * Duplicates are allowed.
   * @param item - The item to insert
   */
  insert(item: T): void {
    this.items.push(item);
  }

  /**
   * Traverse the bag and return all items.
   * The order is based on insertion order.
   * @returns An array containing all items in the bag
   */
  traverse(): T[] {
    return [...this.items];
  }
}
