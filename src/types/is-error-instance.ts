import { isErrorClass } from './is-error-class';

/**
 * Evaluates if provided argument is an instance of an error class.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is an error class instance, else false.
 */
export function isErrorInstance(arg: any): boolean {
  return arg != null && isErrorClass(arg.constructor);
}
