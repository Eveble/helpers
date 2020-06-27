import { expect } from 'chai';
import sinon from 'sinon';
import { isSinonClockDate } from '../../../src/testing/is-sinon-clock-date';

describe(`isSinonClockDate`, () => {
  it('returns true for sinon ClockDate', () => {
    const clock = sinon.useFakeTimers();
    expect(isSinonClockDate(Date)).to.true;
    clock.restore();
  });

  it('return false for non-sinon ClockDate(native Date)', () => {
    expect(isSinonClockDate(Date)).to.false;
  });
});
