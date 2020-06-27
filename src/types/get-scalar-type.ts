import { types } from '../types';

/**
 * Returns scalar type for argument(single discrete value vs non-scalar arguments like objects, arrays that are collection of discrete values).
 * @param arg - Argument as a scalar type.
 * @returns Returns scalar type as a a string if applicable, else null.
 */
export function getScalarType(arg: any): types.ScalarType | null {
  switch (arg) {
    case String:
      return 'string';
    case Boolean:
      return 'boolean';
    case Number:
      return 'number';
    default:
      return null;
  }
}
