/** Last in, first out. The top of the stack is the last value pushed. */
export function createStack() {
  const items = [];
  return {
    push(value) {
      const label = String(value ?? "").trim();
      if (!label) throw new Error("A block needs a label");
      items.push(label);
      return label;
    },
    pop() {
      if (items.length === 0) throw new Error("Stack is empty");
      return items.pop();
    },
    peek() {
      return items.at(-1);
    },
    size() {
      return items.length;
    },
    toArray() {
      return [...items];
    },
  };
}
