/** Eight-bit view of a byte. The string is most-significant bit first. */
export function toBinary(value) {
  if (!Number.isInteger(value) || value < 0 || value > 255) {
    throw new Error("Value must be a whole number from 0 to 255");
  }
  return value.toString(2).padStart(8, "0");
}

export function fromBinary(bits) {
  if (!/^[01]{8}$/.test(bits)) {
    throw new Error("Provide eight bits, using only 0 and 1");
  }
  return Number.parseInt(bits, 2);
}
