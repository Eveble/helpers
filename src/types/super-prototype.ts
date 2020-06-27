import { superClass } from './super-class';

/**
 * Get the parent class prototype from child class.
 * @param child - Child class constructor or instance.
 * @returns Returns parent prototype if exists, else undefined.
 */
export function superPrototype(child: any): Record<keyof any, any> | undefined {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const foundSuperClass: Function | undefined = superClass(child);
  return foundSuperClass != null ? foundSuperClass.prototype : undefined;
}
