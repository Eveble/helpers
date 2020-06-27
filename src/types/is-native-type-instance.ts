import { NATIVE_CONSTRUCTOR_NAMES, NATIVE_TYPES } from '../constants/literal';
import { isConstructor } from './is-constructor';

/**
 * Evaluates if provided argument is instance of native type.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a instance of native type, else false.
 */
export function isNativeTypeInstance(arg: any): boolean {
  if (isConstructor(arg)) return false;
  if (Object.values(NATIVE_TYPES).includes(arg)) return false;
  if (arg == null) return false;

  if (arg.constructor) {
    const isIncluded = NATIVE_CONSTRUCTOR_NAMES.includes(arg.constructor.name);
    if (isIncluded) return true;
  }
  return false;
}
