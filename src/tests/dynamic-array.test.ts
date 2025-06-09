import { describe, it, expect, beforeEach } from "vitest";
import { DynamicArray } from "../data-structures/dynamic-array";

describe("DynamicArray", () => {
  let arr: DynamicArray<number>;

  beforeEach(() => {
    arr = new DynamicArray(2); // Initial capacity
  });

  it("should insert values and resize when full", () => {
    arr.insert(1);
    arr.insert(2);
    arr.insert(3); // triggers resize
    expect(arr.traverse()).toEqual([1, 2, 3]);
  });

  it("should return value at index using find", () => {
    arr.insert(10);
    arr.insert(20);
    expect(arr.find(0)).toBe(10);
    expect(arr.find(1)).toBe(20);
  });

  it("should return null when index is out of bounds in find", () => {
    expect(arr.find(5)).toBe(null);
  });

  it("should delete by index and shift elements", () => {
    arr.insert(1);
    arr.insert(2);
    arr.insert(3);
    arr.deleteAt(1); // delete 2
    expect(arr.traverse()).toEqual([1, 3]);
  });

  it("should return null when deleting at invalid index", () => {
    expect(arr.deleteAt(5)).toBe(null);
  });

  it("should delete by value and shift elements", () => {
    arr.insert(10);
    arr.insert(20);
    arr.insert(30);
    arr.delete(20);
    expect(arr.traverse()).toEqual([10, 30]);
  });

  it("should return false when value to delete is missing", () => {
    arr.insert(1);
    arr.insert(2);
    expect(arr.delete(99)).toBe(false);
  });

  it("should return all items in order with traverse", () => {
    arr.insert(5);
    arr.insert(6);
    arr.insert(7);
    expect(arr.traverse()).toEqual([5, 6, 7]);
  });

  it("should double capacity when insert exceeds current capacity", () => {
    expect(arr.capacity()).toBe(2);
    arr.insert(1);
    arr.insert(2);
    // array is full now, next insert should trigger resize
    arr.insert(3);
    expect(arr.capacity()).toBe(4);
    expect(arr.traverse()).toEqual([1, 2, 3]);
  });

  it("should shrink capacity by half when usage falls to 1/4", () => {
    // fill array to capacity 4 (which is doubled size)
    arr.insert(1);
    arr.insert(2);
    arr.insert(3);
    arr.insert(4);
    expect(arr.capacity()).toBe(4);

    // insert one more to trigger resize to 8
    arr.insert(5);
    expect(arr.capacity()).toBe(8);

    // now delete until size is <= 1/4 capacity (which is 2)
    arr.deleteAt(0); // delete 1
    arr.deleteAt(0); // delete 2
    arr.deleteAt(0); // delete 3 - now size = 2, capacity = 8

    // still no shrink yet, because size=2 is exactly 1/4 capacity=8
    expect(arr.capacity()).toBe(8);

    // delete one more to make size < 1/4 capacity, should shrink now
    arr.deleteAt(0); // delete 4, now size=1

    expect(arr.capacity()).toBe(4); // shrunk to half
    expect(arr.traverse()).toEqual([5]);
  });

  it("should not shrink capacity below initial capacity", () => {
    // fill array and resize
    arr.insert(1);
    arr.insert(2);
    arr.insert(3); // capacity doubled to 4
    expect(arr.capacity()).toBe(4);

    // delete down to size 0, capacity should not shrink below initial 2
    arr.deleteAt(0);
    arr.deleteAt(0);
    arr.deleteAt(0);

    expect(arr.capacity()).toBeGreaterThanOrEqual(2);
  });
});
