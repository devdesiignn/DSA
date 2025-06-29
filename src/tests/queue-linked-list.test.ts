import { describe, it, expect } from "vitest";
import { QueueLinkedList } from "../data-structures/queue-linked-list";

describe("QueueLinkedList", () => {
  it("should initialize an empty queue", () => {
    const queue = new QueueLinkedList<number>();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it("should enqueue elements to the queue", () => {
    const queue = new QueueLinkedList<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1); // FIFO: first in stays in front
    expect(queue.getSize()).toBe(2);
  });

  it("should dequeue elements from the queue", () => {
    const queue = new QueueLinkedList<number>();
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10); // FIFO: first in, first out
    expect(queue.peek()).toBe(20);
    expect(queue.getSize()).toBe(1);
  });

  it("should return null when dequeuing an empty queue", () => {
    const queue = new QueueLinkedList<number>();
    expect(queue.dequeue()).toBe(null);
  });

  it("should return null when peeking an empty queue", () => {
    const queue = new QueueLinkedList<number>();
    expect(queue.peek()).toBe(null);
  });
});
