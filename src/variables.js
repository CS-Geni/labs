/** A labeled value, the same idea as the showcase's name and points. */
export function labeledValue(name, points) {
  const clean = String(name ?? "").trim();
  if (!clean) {
    throw new Error("Name is required");
  }
  if (!Number.isInteger(points) || points < 0) {
    throw new Error("Points must be a whole number, zero or more");
  }
  const unit = points === 1 ? "point" : "points";
  return `${clean} has ${points} ${unit}.`;
}
