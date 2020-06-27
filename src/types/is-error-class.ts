import { NATIVE_ERROR_CLASSES } from '../constants/literal';

/**
 * Evaluates if provided argument is an error class.
 * @param arg - Argument for evaluation.
 * @returns Returns true if argument is an error class, else false.
 */
export const isErrorClass = function (arg: any): boolean {
  return (
    arg != null &&
    (NATIVE_ERROR_CLASSES.includes(arg) ||
      (arg.prototype !== undefined && arg.prototype instanceof Error))
  );
};
