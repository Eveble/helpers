import 'reflect-metadata';
import { TYPE_NAME_KEY } from '../constants/metadata-keys';
import { isClassInstance } from './is-class-instance';
import { isClass } from './is-class';

/**
 * Evaluates if argument has its own type name(if its serializable)
 * @param arg - Argument as a class constructor.
 * @returns Returns `true` if argument has own type name, else `false`.
 */
export function hasTypeName(arg: any): boolean {
  if (arg == null) {
    return false;
  }

  if (isClass(arg)) {
    return Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg);
  }

  if (isClassInstance(arg)) {
    return Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg.constructor);
  }

  return false;
}
