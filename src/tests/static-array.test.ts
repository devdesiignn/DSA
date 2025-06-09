import { describe, it, expect, beforeEach, vi } from "vitest";
import { StaticArray } from "../data-structures/static-array";

describe("StaticArray", () => {
  let arr: StaticArray<number>;

  beforeEach(() => {
    arr = new StaticArray<number>(5); // capacity = 5
  });

  it("should initialize an empty array with correct capacity", () => {
    expect(arr.length()).toBe(0);
  });

  it("should add elements at the end of the array", () => {
    arr.push(10);
    arr.push(20);
    expect(arr.length()).toBe(2);
    expect(arr.get(0)).toBe(10);
    expect(arr.get(1)).toBe(20);
  });

  it("should remove elements from the end of the array", () => {
    arr.push(10);
    arr.push(20);
    const removed = arr.pop();
    expect(removed).toBe(20);
    expect(arr.length()).toBe(1);
    expect(arr.get(0)).toBe(10);
  });

  it("should add element at a specific index", () => {
    arr.push(1);
    arr.push(3);
    arr.insertAt(1, 2); // should insert 2 between 1 and 3
    expect(arr.get(0)).toBe(1);
    expect(arr.get(1)).toBe(2);
    expect(arr.get(2)).toBe(3);
  });

  it("should remove element at a specific index", () => {
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.removeAt(1); // remove 2
    expect(arr.length()).toBe(2);
    expect(arr.get(0)).toBe(1);
    expect(arr.get(1)).toBe(3);
  });

  it("should print all elements correctly", () => {
    arr.push(5);
    arr.push(6);
    arr.push(7);

    // Capture console output
    const logSpy = vi.spyOn(console, "log");
    arr.print();

    expect(logSpy).toHaveBeenCalledWith([5, 6, 7]);
    logSpy.mockRestore();
  });

  it("should return correct element at given index", () => {
    arr.push(42);
    expect(arr.get(0)).toBe(42);
  });

  it("should handle invalid get/set/remove indexes safely", () => {
    expect(arr.get(0)).toBe(null);
    expect(arr.removeAt(0)).toBe(false);
    expect(arr.insertAt(6, 99)).toBe(false); // index > capacity
  });

  it("should not add beyond capacity", () => {
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);
    const result = arr.push(6); // should fail
    expect(result).toBe(false);
    expect(arr.length()).toBe(5);
  });
});
