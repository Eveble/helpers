import { expect } from 'chai';
import { isMultidimensionalArray } from '../../../src/types/is-multidimensional-array';

describe('isMultidimensionalArray', () => {
  it('returns true if its multidimensional array', () => {
    expect(isMultidimensionalArray([[1, 2], 3])).to.be.true;
    expect(isMultidimensionalArray([[1, 2], [3]])).to.be.true;
  });

  it('returns false if its flatten array', () => {
    expect(isMultidimensionalArray([1, 2, 3])).to.be.false;
  });

  it('returns false if argument is not an array', () => {
    expect(isMultidimensionalArray(null)).to.be.false;
    expect(isMultidimensionalArray(undefined)).to.be.false;
    expect(isMultidimensionalArray(Array)).to.be.false;
    expect(isMultidimensionalArray('abcd')).to.be.false;
    expect(isMultidimensionalArray(true)).to.be.false;
    expect(isMultidimensionalArray(new Date())).to.be.false;
    expect(isMultidimensionalArray(2)).to.be.false;
    expect(isMultidimensionalArray(/fail/)).to.be.false;
    expect(isMultidimensionalArray([1234])).to.be.false;
    expect(
      isMultidimensionalArray((): void => {
        return undefined;
      })
    ).to.be.false;
  });
});
