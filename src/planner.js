/**
 * Core of the "Personal study planner" capstone.
 * Tasks stay in the order you added them. The next task is the first one still open.
 */
export function createPlanner() {
  const tasks = [];
  return {
    add(title, minutes) {
      const name = String(title ?? "").trim();
      if (!name) throw new Error("Title is required");
      if (!Number.isInteger(minutes) || minutes <= 0) {
        throw new Error("Minutes must be a whole number greater than zero");
      }
      const task = { title: name, minutes, done: false };
      tasks.push(task);
      return task;
    },
    complete(title) {
      const task = tasks.find((item) => item.title === title && !item.done);
      if (!task) throw new Error("No open task with that title");
      task.done = true;
      return task;
    },
    next() {
      return tasks.find((item) => !item.done);
    },
    minutesLeft() {
      return tasks.filter((item) => !item.done).reduce((sum, item) => sum + item.minutes, 0);
    },
    list() {
      return tasks.map((item) => ({ ...item }));
    },
  };
}
