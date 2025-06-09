/* 

implement a static array

# operations
- create an array 
- initialize an array 

- insert into array (maintain the sort)

- searching thru the array
-- binary search
-- linear search

- delete from array using the value

*/

export class SortedArray<T> {
  private data: T[]; // the array itself
  private capacity: number; // max number of elements array can hold
  private size: number; // no of elements in array

  constructor(capacity: number) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.size = 0;
  }

  public toArray() {
    return this.data.slice(0, this.size);
  }

  public insert(element: T) {
    if (this.size === this.capacity) return false;

    let insertIndex = this.size;

    for (let insertionCounter = 0; insertionCounter < this.size; insertionCounter++) {
      if (element <= this.data[insertionCounter]) {
        insertIndex = insertionCounter;
        break;
      }
    }

    for (let shiftCounter = this.size; shiftCounter > insertIndex; shiftCounter--) {
      this.data[shiftCounter] = this.data[shiftCounter - 1];
    }

    this.data[insertIndex] = element;
    this.size++;
    return true;
  }

  public linearSearch(target: T) {
    for (let counter = 0; counter < this.size; counter++) {
      if (target === this.data[counter]) return counter;
    }

    return -1;
  }

  public binarySearch(target: T) {
    let left = 0;
    let right = this.size - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (this.data[middle] === target) return middle;
      // search left if element in middle is greater than target
      else if (this.data[middle] > target) right = middle - 1;
      // search right if otherwise
      else left = middle + 1;
    }

    return -1;
  }

  public delete(target: T) {
    const indexToRemove = this.binarySearch(target);

    if (indexToRemove === -1) return false;

    for (let counter = indexToRemove; counter < this.size - 1; counter++) {
      this.data[counter] = this.data[counter + 1];
    }

    this.data[this.size - 1] = undefined as T;
    this.size--;

    return true;
  }
}
