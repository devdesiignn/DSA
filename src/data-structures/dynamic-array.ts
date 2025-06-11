export class DynamicArray<T> {
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

  private _search(target: T) {
    for (let counter = 0; counter < this._length; counter++) {
      if (target === this._data[counter]) return counter;
    }

    return -1;
  }

  public capacity() {
    return this._capacity;
  }

  public traverse() {
    return this._data.slice(0, this._length);
  }

  public insert(value: T) {
    if (this._length === this._capacity) this._double();

    this._data[this._length] = value;
    this._length++;
    return true;
  }

  public find(index: number) {
    if (index < 0 || index >= this._length) return null;
    return this._data[index];
  }

  public delete(target: T) {
    const indexToRemove = this._search(target);

    if (indexToRemove === -1) return false;

    for (let counter = indexToRemove; counter < this._length - 1; counter++) {
      this._data[counter] = this._data[counter + 1];
    }

    this._data[this._length - 1] = undefined as T;
    this._length--;

    if (this._capacity > 2 && this._length < this._capacity / 4) this._halve();

    return true;
  }

  public deleteAt(index: number) {
    if (index < 0 || index >= this._length) return null;

    for (let counter = index; counter < this._length - 1; counter++) {
      this._data[counter] = this._data[counter + 1];
    }

    this._data[this._length - 1] = undefined as T;
    this._length--;

    if (this._capacity > 2 && this._length < this._capacity / 4) this._halve();

    return true;
  }
}
