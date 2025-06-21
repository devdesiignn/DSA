import { describe, it, expect } from "vitest";
import { SortedLinkedList } from "../data-structures/sorted-linked-list";

describe("SortedLinkedList", () => {
  it("should insert nodes in sorted order", () => {
    const list = new SortedLinkedList<number>();
    list.insert(20);
    list.insert(10);
    list.insert(30);
    list.insert(25);
    expect(list.traverse()).toEqual([10, 20, 25, 30]);
  });

  it("should handle inserting into empty list", () => {
    const list = new SortedLinkedList<number>();
    list.insert(5);
    expect(list.traverse()).toEqual([5]);
  });
});
