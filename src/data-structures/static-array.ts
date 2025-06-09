/* 

implement a static array

# operations
- create an array 
- initialize an array 
- printng an array 
- printing length of an array 

- adding elements at end of array 
- removing elements from end of array 

- adding elements specified index
- removing elements from specified index

- printing element at specified index 

*/

export class StaticArray<T> {
  private data: T[]; // the array itself
  private capacity: number; // max number of elements array can hold
  private size: number; // no of elements in array

  constructor(capacity: number) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.size = 0;
  }

  public length() {
    return this.size;
  }

  public print() {
    console.log(this.data.slice(0, this.size));
  }

  public push(element: T) {
    if (this.size === this.capacity) return false;

    this.data[this.size] = element;
    this.size++;
    return true;
  }

  public pop() {
    if (this.size === 0) return null;

    const temp = this.data[this.size - 1];

    this.data[this.size - 1] = undefined as T;
    this.size--;

    return temp;
  }

  public insertAt(index: number, element: T) {
    if (index < 0 || this.size === this.capacity || index > this.size) return false;

    for (let counter = this.size; counter > index; counter--) {
      this.data[counter] = this.data[counter - 1];
    }

    this.data[index] = element;
    this.size++;

    return true;
  }

  public removeAt(index: number) {
    if (index < 0 || index >= this.size) return false;

    for (let counter = index; counter < this.size - 1; counter++) {
      this.data[counter] = this.data[counter + 1];
    }

    this.data[this.size - 1] = undefined as T;
    this.size--;

    return true;
  }

  public get(index: number) {
    if (index < 0 || index >= this.size) return null;
    return this.data[index];
  }
}
