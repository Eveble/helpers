import { types } from '../types';
import 'reflect-metadata';
import { TYPE_NAME_KEY } from '../constants/metadata-keys';

/**
 * Sets type name for argument as metadata assigned to constructor.
 * @param arg - Argument as a class constructor.
 */
export function setTypeName(arg: any, typeName: types.TypeName): void {
  if (arg == null) {
    return;
  }
  Reflect.defineMetadata(TYPE_NAME_KEY, typeName, arg);
}
