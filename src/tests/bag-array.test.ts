import { describe, it, expect } from "vitest";
import { BagArray } from "../data-structures/bag-array";

describe("BagArray", () => {
  it("should insert a single item into the bag", () => {
    const bag = new BagArray<number>();
    bag.insert(10);
    expect(bag.traverse()).toEqual([10]);
  });

  it("should allow duplicate items", () => {
    const bag = new BagArray<string>();
    bag.insert("apple");
    bag.insert("apple");
    bag.insert("banana");
    expect(bag.traverse()).toEqual(["apple", "apple", "banana"]);
  });

  it("should return an empty array when the bag is empty", () => {
    const bag = new BagArray<boolean>();
    expect(bag.traverse()).toEqual([]);
  });
});
