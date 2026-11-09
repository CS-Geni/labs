/** One step of "for each robot, wave", so you can watch the loop move. */
export function waveSteps(robots) {
  if (!Array.isArray(robots) || robots.length === 0) {
    throw new Error("Provide at least one robot");
  }
  return robots.map((robot, index) => {
    const name = String(robot ?? "").trim();
    if (!name) throw new Error(`Robot ${index + 1} needs a name`);
    return {
      index,
      name,
      said: `${name} waves`,
      remaining: robots.length - index - 1,
    };
  });
}
