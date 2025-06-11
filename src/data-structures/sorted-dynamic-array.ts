export class SortedDynamicArray<T> {
  private _data: T[];
  private _capacity: number;
  private _length: number;

  constructor(capacity: number) {
    this._capacity = capacity;
    this._data = new Array(capacity);
    this._length = 0;
  }

  private _double() {
    const oldArray = this._data;
    this._data = new Array(this._capacity * 2);
    this._capacity *= 2;

    for (let i = 0; i < this._length; i++) {
      this._data[i] = oldArray[i];
    }
  }

  private _halve() {
    const oldArray = this._data;
    const newCapacity = Math.floor(this._capacity / 2);
    this._data = new Array(newCapacity);
    this._capacity = newCapacity;

    for (let i = 0; i < this._length; i++) {
      this._data[i] = oldArray[i];
    }
  }

  public insert(value: T) {
    if (this._length === this._capacity) this._double();

    let insertIndex = this._length;

    for (let insertionCounter = 0; insertionCounter < this._length; insertionCounter++) {
      if (value <= this._data[insertionCounter]) {
        insertIndex = insertionCounter;
        break;
      }
    }

    for (let shiftCounter = this._length; shiftCounter > insertIndex; shiftCounter--) {
      this._data[shiftCounter] = this._data[shiftCounter - 1];
    }

    this._data[insertIndex] = value;
    this._length++;
    return true;
  }

  public delete(value: T) {
    const indexToRemove = this.find(value);

    if (indexToRemove === -1) return false;

    for (let counter = indexToRemove; counter < this._length - 1; counter++) {
      this._data[counter] = this._data[counter + 1];
    }

    this._data[this._length - 1] = undefined as T;
    this._length--;

    if (this._capacity > 2 && this._length < this._capacity / 4) this._halve();

    return true;
  }

  public find(value: T) {
    let left = 0;
    let right = this._length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (this._data[middle] === value) return middle;
      // search left if element in middle is greater than value
      else if (this._data[middle] > value) right = middle - 1;
      // search right if otherwise
      else left = middle + 1;
    }

    return -1;
  }

  public traverse() {
    return this._data.slice(0, this._length);
  }

  public capacity() {
    return this._capacity;
  }
}
