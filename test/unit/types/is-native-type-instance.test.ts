import { expect } from 'chai';
import { isNativeTypeInstance } from '../../../src/types/is-native-type-instance';

class MyClass {}

describe(`isNativeTypeInstance`, () => {
  it(`returns true if provided argument is a native type instance`, () => {
    expect(isNativeTypeInstance('abcd')).to.be.true;
    expect(isNativeTypeInstance(true)).to.be.true;
    expect(isNativeTypeInstance(false)).to.be.true;
    expect(isNativeTypeInstance(new Date())).to.be.true;
    expect(isNativeTypeInstance(2)).to.be.true;
    expect(isNativeTypeInstance(/fail/)).to.be.true;
    expect(isNativeTypeInstance([1234])).to.be.true;
    expect(
      isNativeTypeInstance((): void => {
        return undefined;
      })
    ).to.be.true;
    expect(isNativeTypeInstance(Symbol('key'))).to.be.true;
    expect(isNativeTypeInstance(new Map([]))).to.be.true;
    expect(
      isNativeTypeInstance({
        key: 'value',
      })
    ).to.be.true;
    expect(isNativeTypeInstance(Symbol('key'))).to.be.true;
    expect(isNativeTypeInstance(new MyClass())).to.be.false;
  });

  it(`returns false if provided argument is not a native type instance`, () => {
    expect(isNativeTypeInstance(null)).to.be.false;
    expect(isNativeTypeInstance(undefined)).to.be.false;
    expect(isNativeTypeInstance(String)).to.be.false;
    expect(isNativeTypeInstance(Boolean)).to.be.false;
    expect(isNativeTypeInstance(Date)).to.be.false;
    expect(isNativeTypeInstance(Number)).to.be.false;
    expect(isNativeTypeInstance(RegExp)).to.be.false;
    expect(isNativeTypeInstance(Array)).to.be.false;
    expect(isNativeTypeInstance(Symbol)).to.be.false;
    expect(isNativeTypeInstance(Map)).to.be.false;
    expect(isNativeTypeInstance(Object)).to.be.false;
    expect(isNativeTypeInstance(Function)).to.be.false;
    expect(isNativeTypeInstance(MyClass)).to.be.false;
  });
});
