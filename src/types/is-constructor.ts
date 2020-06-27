/**
 * Evaluates if provided argument is constructor(of class, error or native type).
 * @param arg - Argument for evaluation.
 * @returns Returns true if argument is a constructor for class, error or native type, else false.
 */
export function isConstructor(arg: any): boolean {
  try {
    // eslint-disable-next-line new-cap
    new arg();
  } catch (err) {
    return false;
  }
  return true;
}
