import { describe, it, expect, beforeEach } from "vitest";
import { SortedDynamicArray } from "../data-structures/sorted-dynamic-array";

describe("SortedDynamicArray", () => {
  let arr: SortedDynamicArray<number>;

  beforeEach(() => {
    arr = new SortedDynamicArray(2); // Initial capacity
  });

  it("should insert values and keep array sorted", () => {
    arr.insert(5);
    arr.insert(1);
    arr.insert(3);
    arr.insert(9);
    arr.insert(7);
    expect(arr.traverse()).toEqual([1, 3, 5, 7, 9]);
  });

  it("should delete the first element correctly", () => {
    [3, 1, 5].forEach((v) => arr.insert(v));
    arr.delete(1);
    expect(arr.traverse()).toEqual([3, 5]);
  });

  it("should delete a middle element correctly", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    arr.delete(3);
    expect(arr.traverse()).toEqual([1, 5]);
  });

  it("should delete the last element correctly", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    arr.delete(5);
    expect(arr.traverse()).toEqual([1, 3]);
  });

  it("should return false when deleting a missing value", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    expect(arr.delete(42)).toBe(false);
  });

  it("should allow inserting duplicate values", () => {
    [4, 2, 2, 3].forEach((v) => arr.insert(v));
    expect(arr.traverse()).toEqual([2, 2, 3, 4]);
  });

  it("should find existing values with binarySearch", () => {
    [2, 4, 6, 8].forEach((v) => arr.insert(v));
    expect(arr.binarySearch(2)).toBe(0);
    expect(arr.binarySearch(6)).toBe(2);
    expect(arr.binarySearch(8)).toBe(3);
  });

  it("should return -1 in binarySearch for missing values", () => {
    [1, 2, 3].forEach((v) => arr.insert(v));
    expect(arr.binarySearch(99)).toBe(-1);
  });

  it("should return all elements in order with traverse", () => {
    arr.insert(9);
    arr.insert(5);
    arr.insert(7);
    expect(arr.traverse()).toEqual([5, 7, 9]);
  });

  it("should double capacity when inserting beyond current capacity", () => {
    expect(arr.capacity()).toBe(2);
    arr.insert(3);
    arr.insert(1);
    arr.insert(2); // triggers resize
    expect(arr.capacity()).toBe(4);
    expect(arr.traverse()).toEqual([1, 2, 3]);
  });

  it("should shrink capacity by half when usage falls to 1/4", () => {
    [3, 1, 5, 2, 4].forEach((v) => arr.insert(v));
    expect(arr.capacity()).toBe(8); // assuming double from 2->4->8

    // delete elements to reduce size below 1/4 capacity (which is 2 here)
    arr.delete(1);
    arr.delete(2);
    arr.delete(3);
    arr.delete(4);
    // Now size = 1

    expect(arr.capacity()).toBe(4); // shrunk from 8 to 4

    expect(arr.traverse()).toEqual([5]);
  });

  it("should not shrink below initial capacity", () => {
    [1, 2, 3].forEach((v) => arr.insert(v));
    expect(arr.capacity()).toBe(4);

    arr.delete(1);
    arr.delete(2);
    arr.delete(3);

    expect(arr.capacity()).toBeGreaterThanOrEqual(2);
  });
});
