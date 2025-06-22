import { describe, it, expect } from "vitest";
import { StackLinkedList } from "../data-structures/stack-linked-list";

describe("StackLinkedList", () => {
  it("should initialize an empty stack", () => {
    const stack = new StackLinkedList<number>();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it("should push elements to the stack", () => {
    const stack = new StackLinkedList<number>();
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.getSize()).toBe(2);
  });

  it("should pop elements from the stack", () => {
    const stack = new StackLinkedList<number>();
    stack.push(5);
    stack.push(15);
    expect(stack.pop()).toBe(15); // LIFO
    expect(stack.peek()).toBe(5);
    expect(stack.getSize()).toBe(1);
  });

  it("should return null when popping from empty stack", () => {
    const stack = new StackLinkedList<number>();
    expect(stack.pop()).toBe(null);
  });

  it("should return null when peeking empty stack", () => {
    const stack = new StackLinkedList<number>();
    expect(stack.peek()).toBe(null);
  });
});
