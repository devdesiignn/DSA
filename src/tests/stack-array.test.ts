import { describe, it, expect } from "vitest";
import { StackArray } from "../data-structures/stack-array";

describe("StackArray", () => {
  it("should initialize empty stack", () => {
    const stack = new StackArray<string>();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it("should push elements to the stack", () => {
    const stack = new StackArray<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.getSize()).toBe(2);
  });

  it("should pop elements from the stack", () => {
    const stack = new StackArray<number>();
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
    expect(stack.getSize()).toBe(1);
  });

  it("should return undefined when popping empty stack", () => {
    const stack = new StackArray<number>();
    expect(stack.pop()).toBe(undefined);
  });

  it("should return undefined when peeking empty stack", () => {
    const stack = new StackArray<number>();
    expect(stack.peek()).toBe(undefined);
  });
});
