/**
 * Evaluates if Mocha is running on context(global/window) i.e. testing environment is present.
 * @param context - Global context which is evaluated.
 * @returns Returns true if Mocha is running on context, else false.
 */
export function isMocha(context: any): boolean {
  return ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it'].every(
    (fnName) => context[fnName] instanceof Function
  );
}
