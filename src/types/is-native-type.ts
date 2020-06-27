import { NATIVE_TYPES } from '../constants/literal';

/**
 * Evaluates if provided argument is constructor of one of native types.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a native type, else false.
 * @example
 * isNativeType(String) // true
 * isNativeType('my-string-value') // false
 */
export function isNativeType(arg: any): boolean {
  return arg == null || Object.values(NATIVE_TYPES).includes(arg);
}
