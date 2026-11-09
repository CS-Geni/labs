# CS-Geni labs

Five small JavaScript programs for the first ideas on [CS-Geni](https://cs-geni.github.io/public/). Each one is original to this repository, and each one has tests.

| Lab | File | Idea | Where it shows up |
| --- | --- | --- | --- |
| Named values | `src/variables.js` | A variable is a label for a value | [Showcase](https://cs-geni.github.io/public/showcase/) and Computer Science Without the Jargon |
| Loops | `src/loops.js` | One instruction, every item | Showcase robots |
| Stack | `src/stack.js` | Last in, first out | Showcase blocks, and later data structures |
| Study planner | `src/planner.js` | Tasks, order, and time left | Capstone for [Python: Your First Programs](https://github.com/CS-Geni/curriculum/blob/main/courses/python-first-steps.md) |
| Bits | `src/bits.js` | A number is also eight bits | Inside a Computer |

Node.js 20 or newer is enough. There are no packages to install.

```bash
npm test
```

## Try one

`labeledValue("Ada", 3)` returns `Ada has 3 points.` One point is singular. A blank name is an error, because a label that does not name anything is not a variable you can trust.

`waveSteps(["Beep", "Boop", "Byte"])` returns three steps. Each step says who waved and how many robots are still waiting. That is the loop, written so you can see the counter move.

`createStack()` pushes labels and pops the latest one first. Popping an empty stack throws, which is the same rule as the cupboard: you cannot take a plate that is not there.

`createPlanner()` is the heart of the personal study planner. Add tasks with a title and minutes, complete one by title, and ask for the next open task plus the minutes still left. Build a command-line or web front on top of it when you do the capstone. The brief is [here](https://github.com/CS-Geni/projects/blob/main/briefs/python-first-steps.md).

`toBinary(2)` is `00000010`. `fromBinary` accepts eight characters of `0` and `1` and gives the number back.

## Contributing

Add a lab when it teaches one idea and includes a test for the happy path and a test for the bad input. Keep the functions small enough to read in one sitting.

## License

[MIT](LICENSE).
