import { expect } from 'chai';
import { isMocha } from '../../../src/testing/is-mocha';

describe(`isMocha`, () => {
  it(`returns true if Mocha is attached to provided context`, () => {
    const context = global;
    expect(isMocha(context)).to.be.true;
  });

  it(`returns false if provided context does not have attached Mocha`, () => {
    const context = {};
    expect(isMocha(context)).to.be.false;
  });
});
