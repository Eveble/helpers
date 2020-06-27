/**
 * Evaluates if array argument is multidimensional(is nested array).
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a multidimensional array, else false.
 */
export function isMultidimensionalArray(arg: any): boolean {
  if (!Array.isArray(arg)) {
    return false;
  }
  for (const element of arg) {
    if (Array.isArray(element)) {
      return true;
    }
  }
  return false;
}
