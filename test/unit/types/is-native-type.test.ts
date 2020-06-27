import { expect } from 'chai';
import { isNativeType } from '../../../src/types/is-native-type';

describe(`isNativeType`, () => {
  class MyClass {}

  it(`returns true if provided argument is a native type`, () => {
    expect(isNativeType(null)).to.be.true;
    expect(isNativeType(undefined)).to.be.true;
    expect(isNativeType(String)).to.be.true;
    expect(isNativeType(Boolean)).to.be.true;
    expect(isNativeType(Date)).to.be.true;
    expect(isNativeType(Number)).to.be.true;
    expect(isNativeType(RegExp)).to.be.true;
    expect(isNativeType(Array)).to.be.true;
    expect(isNativeType(Function)).to.be.true;
    expect(isNativeType(Symbol)).to.be.true;
    expect(isNativeType(Map)).to.be.true;
    expect(isNativeType(Object)).to.be.true;
  });

  it(`returns false if provided argument is not a native type`, () => {
    expect(isNativeType(MyClass)).to.be.false;
  });
});
