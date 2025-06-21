import { describe, it, expect } from "vitest";
import { SinglyLinkedList } from "../data-structures/singly-linked-list";

describe("SinglyLinkedList", () => {
  it("should insert at the end of the list", () => {
    const list = new SinglyLinkedList<number>();
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    expect(list.traverse()).toEqual([10, 20]);
  });

  it("should insert at the front of the list", () => {
    const list = new SinglyLinkedList<number>();
    list.insertAtFront(10);
    list.insertAtFront(5);
    expect(list.traverse()).toEqual([5, 10]);
  });

  it("should delete the first node", () => {
    const list = new SinglyLinkedList<number>();
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.delete(10);
    expect(list.traverse()).toEqual([20]);
  });

  it("should delete the last node", () => {
    const list = new SinglyLinkedList<number>();
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.delete(20);
    expect(list.traverse()).toEqual([10]);
  });

  it("should return empty array when traversing an empty list", () => {
    const list = new SinglyLinkedList<number>();
    expect(list.traverse()).toEqual([]);
  });
});
