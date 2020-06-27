import { isClass } from './is-class';

/**
 * Get the parent class from child.
 * @param child - Child class constructor or instance.
 * @returns Returns parent class if exists, else undefined.
 */
export function superClass(child: any): Function | undefined {
  if (child == null) {
    return undefined;
  }
  let ctor: Function;
  if (!isClass(child)) {
    ctor = child.constructor;
  } else {
    ctor = child;
  }

  const parent: Function | undefined = Object.getPrototypeOf(ctor);
  if (parent != null && parent.name !== '' && isClass(parent)) {
    return parent;
  }
  return undefined;
}
