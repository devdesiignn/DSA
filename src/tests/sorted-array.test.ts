import { describe, it, expect, beforeEach } from "vitest";
import { SortedArray } from "../data-structures/sorted-array";

describe("SortedArray", () => {
  let arr: SortedArray<number>;

  beforeEach(() => {
    arr = new SortedArray(10);
  });

  it("should insert values in random order and keep array sorted", () => {
    arr.insert(5);
    arr.insert(1);
    arr.insert(3);
    arr.insert(9);
    arr.insert(7);
    expect(arr.toArray()).toEqual([1, 3, 5, 7, 9]);
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

  it("should delete the first element correctly", () => {
    [3, 1, 5].forEach((v) => arr.insert(v));
    arr.delete(1);
    expect(arr.toArray()).toEqual([3, 5]);
  });

  it("should delete a middle element correctly", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    arr.delete(3);
    expect(arr.toArray()).toEqual([1, 5]);
  });

  it("should delete the last element correctly", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    arr.delete(5);
    expect(arr.toArray()).toEqual([1, 3]);
  });

  it("should return false when deleting a missing value", () => {
    [1, 3, 5].forEach((v) => arr.insert(v));
    expect(arr.delete(42)).toBe(false);
  });

  it("should allow inserting duplicate values", () => {
    [4, 2, 2, 3].forEach((v) => arr.insert(v));
    expect(arr.toArray()).toEqual([2, 2, 3, 4]);
  });

  it("should find existing values with linearSearch", () => {
    [2, 4, 6, 8].forEach((v) => arr.insert(v));
    expect(arr.linearSearch(2)).toBe(0);
    expect(arr.linearSearch(6)).toBe(2);
    expect(arr.linearSearch(8)).toBe(3);
  });

  it("should return -1 in linearSearch for missing values", () => {
    [1, 2, 3].forEach((v) => arr.insert(v));
    expect(arr.linearSearch(99)).toBe(-1);
  });
});
