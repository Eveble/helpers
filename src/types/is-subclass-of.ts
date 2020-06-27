import { isClass } from './is-class';

/**
 * Evaluates if provided child class is inheriting from parent class.
 * @param child - Child class constructor.
 * @param parent - Parent class constructor.
 * @returns Returns true if child class is subclass of parent class, else false.
 */
export function isSubclassOf(child: any, parent: any): boolean {
  const isSubclass: boolean =
    isClass(child) && child.prototype instanceof parent;
  const isSameClass: boolean = child === parent;
  return isSubclass || isSameClass;
}
