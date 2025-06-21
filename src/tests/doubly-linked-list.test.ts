import { describe, it, expect } from "vitest";
import { DoublyLinkedList } from "../data-structures/doubly-linked-list";

describe("DoublyLinkedList", () => {
  it("should insert into sorted position", () => {
    const list = new DoublyLinkedList<number>();
    list.insert(20);
    list.insert(10);
    list.insert(30);
    list.insert(25);
    expect(list.traverse()).toEqual([10, 20, 25, 30]);
  });

  it("should delete the head node", () => {
    const list = new DoublyLinkedList<number>();
    list.insert(10);
    list.insert(20);
    list.delete(10);
    expect(list.traverse()).toEqual([20]);
  });

  it("should delete the tail node", () => {
    const list = new DoublyLinkedList<number>();
    list.insert(10);
    list.insert(20);
    list.delete(20);
    expect(list.traverse()).toEqual([10]);
  });

  it("should delete a node in the middle", () => {
    const list = new DoublyLinkedList<number>();
    list.insert(10);
    list.insert(20);
    list.insert(30);
    list.delete(20);
    expect(list.traverse()).toEqual([10, 30]);
  });

  it("should concatenate two lists", () => {
    const a = new DoublyLinkedList<number>();
    a.insert(10);
    a.insert(20);

    const b = new DoublyLinkedList<number>();
    b.insert(30);
    b.insert(40);

    a.concatenate(b);
    expect(a.traverse()).toEqual([10, 20, 30, 40]);
  });
});
