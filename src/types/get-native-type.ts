import { types } from '../types';
import { NATIVE_TYPES } from '../constants/literal';

/**
 * Returns native type.
 * @param arg - Argument as a native type or instance of native type.
 * @returns Returns native type constructor if applicable, else null.
 */
export function getNativeType(arg: any): types.NativeType | null {
  if (arg === Object) {
    return Object;
  }
  if (arg instanceof Date) {
    return Date;
  }
  if (arg instanceof RegExp) {
    return RegExp;
  }
  if (arg instanceof Array) {
    return Array;
  }
  if (arg instanceof Map) {
    return Map;
  }
  for (const [name, nativeType] of Object.entries(NATIVE_TYPES)) {
    if (arg === nativeType || typeof arg === name) {
      return nativeType;
    }
  }
  return null;
}
