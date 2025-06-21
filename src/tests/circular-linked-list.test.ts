import { describe, it, expect } from "vitest";
import { CircularLinkedList } from "../data-structures/circular-linked-list";

describe("CircularLinkedList", () => {
  it("should insert values in circular manner", () => {
    const list = new CircularLinkedList<number>();
    list.insert(10);
    list.insert(20);
    list.insert(30);
    expect(list.traverse(3)).toEqual([10, 20, 30]);
  });

  it("should loop around if you traverse more than length", () => {
    const list = new CircularLinkedList<number>();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.traverse(5)).toEqual([1, 2, 3, 1, 2]);
  });
});
