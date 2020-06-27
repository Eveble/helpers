import { expect } from 'chai';
import { isScalarType } from '../../../src/types/is-scalar-type';

describe(`isScalarType`, () => {
  it(`returns true for String`, () => {
    expect(isScalarType(String)).to.be.true;
  });

  it(`returns true for Number`, () => {
    expect(isScalarType(Number)).to.be.true;
  });

  it(`returns false for Date`, () => {
    expect(isScalarType(Date)).to.be.false;
  });

  it(`returns false for RegExp`, () => {
    expect(isScalarType(RegExp)).to.be.false;
  });

  it(`returns false for Array`, () => {
    expect(isScalarType(Array)).to.be.false;
  });

  it(`returns false for Function`, () => {
    expect(isScalarType(Function)).to.be.false;
  });

  it(`returns false for Object`, () => {
    expect(isScalarType(Object)).to.be.false;
  });
});
