import { types } from '../types';
import 'reflect-metadata';
import { TYPE_NAME_KEY } from '../constants/metadata-keys';
import { isClassInstance } from './is-class-instance';
import { isClass } from './is-class';
import { isConstructor } from './is-constructor';

/**
 * Returns argument name as its type name(if its serializable) or constructor's name.
 * @param arg - Argument as a class constructor.
 * @returns Argument name as a TypeName(string), else undefined.
 */
export function getTypeName(arg: any): types.TypeName | undefined {
  if (arg == null) {
    return undefined;
  }

  if (isClass(arg)) {
    if (Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg)) {
      return Reflect.getOwnMetadata(TYPE_NAME_KEY, arg);
    }
    return arg.name;
  }

  if (isClassInstance(arg)) {
    if (Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg.constructor)) {
      return Reflect.getOwnMetadata(TYPE_NAME_KEY, arg.constructor);
    }
    return arg.constructor.name;
  }

  if (isConstructor(arg)) {
    return arg.name;
  }

  if (arg.constructor !== undefined) {
    return arg.constructor.name;
  }
  return undefined;
}
