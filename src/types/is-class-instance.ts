import { isClass } from './is-class';
import { isErrorClass } from './is-error-class';

/**
 * Evaluates if provided argument is instance of a class.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a class instance, else false.
 */
export function isClassInstance(arg: any): boolean {
  return (
    arg != null && (isClass(arg.constructor) || isErrorClass(arg.constructor))
  );
}
