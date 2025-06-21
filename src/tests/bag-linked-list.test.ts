import { describe, it, expect } from "vitest";
import { BagLinkedList } from "../data-structures/bag-linked-list";

describe("BagLinkedList", () => {
  it("should insert a single item into the bag", () => {
    const bag = new BagLinkedList<number>();
    bag.insert(10);
    expect(bag.traverse()).toEqual([10]);
  });

  it("should allow duplicate items", () => {
    const bag = new BagLinkedList<string>();
    bag.insert("apple");
    bag.insert("apple");
    bag.insert("banana");
    // Expected order depends on how you insert (head-first vs tail-first)
    // For instance, if inserting at head, the order might be reversed.
    // Adjust the expected order based on your implementation.
    expect(bag.traverse()).toEqual(["apple", "apple", "banana"]);
  });

  it("should return an empty array when the bag is empty", () => {
    const bag = new BagLinkedList<boolean>();
    expect(bag.traverse()).toEqual([]);
  });
});
