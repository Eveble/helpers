import { isMocha } from './is-mocha';

/**
 * Evaluates if Date has been replaced with sinon's ClockDate(when test's are using sinon.useFakeTimers)
 * @param value - Value that will be evaluated if its a constructor of sinon's ClockDate.
 * @returns Returns true if value is a sinon ClockDate, else false.
 */
export function isSinonClockDate(value: any): boolean {
  return (
    value.name !== undefined &&
    /^ClockDate$/.test(value.name) === true &&
    isMocha(global)
  );
}
