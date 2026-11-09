import assert from "node:assert/strict";
import test from "node:test";
import { labeledValue } from "../src/variables.js";
import { waveSteps } from "../src/loops.js";
import { createStack } from "../src/stack.js";
import { createPlanner } from "../src/planner.js";
import { fromBinary, toBinary } from "../src/bits.js";

test("a variable is a name for a value", () => {
  assert.equal(labeledValue("Ada", 3), "Ada has 3 points.");
  assert.equal(labeledValue(" Ada ", 1), "Ada has 1 point.");
  assert.throws(() => labeledValue("  ", 1), /Name is required/);
  assert.throws(() => labeledValue("Ada", -1), /whole number/);
});

test("a loop visits every robot once", () => {
  const steps = waveSteps(["Beep", "Boop", "Byte"]);
  assert.deepEqual(
    steps.map((step) => step.said),
    ["Beep waves", "Boop waves", "Byte waves"],
  );
  assert.equal(steps[0].remaining, 2);
  assert.equal(steps[2].remaining, 0);
  assert.throws(() => waveSteps([]), /at least one robot/);
});

test("a stack returns the last block first", () => {
  const stack = createStack();
  stack.push("A");
  stack.push("B");
  assert.equal(stack.peek(), "B");
  assert.equal(stack.pop(), "B");
  assert.equal(stack.pop(), "A");
  assert.equal(stack.size(), 0);
  assert.throws(() => stack.pop(), /empty/);
  assert.throws(() => stack.push("  "), /label/);
});

test("the study planner reports the next open task", () => {
  const planner = createPlanner();
  planner.add("Read bits", 25);
  planner.add("Trace a loop", 15);
  assert.equal(planner.next().title, "Read bits");
  assert.equal(planner.minutesLeft(), 40);
  planner.complete("Read bits");
  assert.equal(planner.next().title, "Trace a loop");
  assert.equal(planner.minutesLeft(), 15);
  assert.throws(() => planner.add("", 10), /Title/);
  assert.throws(() => planner.add("Rest", 0), /Minutes/);
  assert.throws(() => planner.complete("Read bits"), /No open task/);
});

test("a byte converts to eight bits and back", () => {
  assert.equal(toBinary(0), "00000000");
  assert.equal(toBinary(2), "00000010");
  assert.equal(fromBinary("00000010"), 2);
  assert.equal(fromBinary(toBinary(255)), 255);
  assert.throws(() => toBinary(256), /0 to 255/);
  assert.throws(() => fromBinary("101"), /eight bits/);
});
