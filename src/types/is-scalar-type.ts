import { getScalarType } from './get-scalar-type';

/**
 * Evaluates if argument is scalar type.
 * @param arg - Argument to evaluate.
 * @returns Returns true if argument is a scalar type, else false.
 */
export function isScalarType(arg: any): boolean {
  return getScalarType(arg) !== null;
}
