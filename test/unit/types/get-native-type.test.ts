import { expect } from 'chai';
import { getNativeType } from '../../../src/types/get-native-type';

describe(`getNativeType`, () => {
  it(`returns native type when native type is passed`, () => {
    expect(getNativeType(String)).to.be.equal(String);
    expect(getNativeType(Boolean)).to.be.equal(Boolean);
    expect(getNativeType(Date)).to.be.equal(Date);
    expect(getNativeType(Number)).to.be.equal(Number);
    expect(getNativeType(RegExp)).to.be.equal(RegExp);
    expect(getNativeType(Array)).to.be.equal(Array);
    expect(getNativeType(Symbol)).to.be.equal(Symbol);
    expect(getNativeType(Map)).to.be.equal(Map);
    expect(getNativeType(Function)).to.be.equal(Function);
    expect(getNativeType(Object)).to.be.equal(Object);
  });

  it(`returns native type when native type instance is passed`, () => {
    expect(getNativeType('abcd')).to.be.equal(String);
    expect(getNativeType(true)).to.be.equal(Boolean);
    expect(getNativeType(new Date())).to.be.equal(Date);
    expect(getNativeType(2)).to.be.equal(Number);
    expect(getNativeType(/fail/)).to.be.equal(RegExp);
    expect(getNativeType([1234])).to.be.equal(Array);
    expect(getNativeType(Symbol('key'))).to.be.equal(Symbol);
    expect(getNativeType(new Map([]))).to.be.equal(Map);
    expect(
      getNativeType((): void => {
        return undefined;
      })
    ).to.be.equal(Function);
    expect(
      getNativeType({
        key: 'value',
      })
    ).to.be.equal(Object);
  });
});
