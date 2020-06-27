/**
 * Evaluates if passed argument is a class.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a class constructor, else false.
 */
export function isClass(arg: any): boolean {
  const { toString } = Function.prototype;

  return (
    typeof arg === 'function' &&
    (/class\s/.test(toString.call(arg)) ||
      /.classCallCheck/.test(toString.call(arg)))
  );
}
