import { expect } from 'chai';
import { isConstructor } from '../../../src/types/is-constructor';

describe(`isConstructor`, () => {
  class MyClass {}
  class MyError extends Error {}

  it(`returns true if provided argument is a constructor for native type`, () => {
    expect(isConstructor(String)).to.be.true;
    expect(isConstructor(Boolean)).to.be.true;
    expect(isConstructor(Date)).to.be.true;
    expect(isConstructor(Number)).to.be.true;
    expect(isConstructor(RegExp)).to.be.true;
    expect(isConstructor(Array)).to.be.true;
    expect(isConstructor(Function)).to.be.true;
    expect(isConstructor(Object)).to.be.true;
    expect(isConstructor(Error)).to.be.true;
    expect(isConstructor(EvalError)).to.be.true;
    expect(isConstructor(RangeError)).to.be.true;
    expect(isConstructor(ReferenceError)).to.be.true;
    expect(isConstructor(SyntaxError)).to.be.true;
    expect(isConstructor(TypeError)).to.be.true;
    expect(isConstructor(URIError)).to.be.true;
    expect(isConstructor(MyError)).to.be.true;
  });

  it(`returns true if provided argument is a constructor for non-native types(classes)`, () => {
    expect(isConstructor(MyClass)).to.be.true;
  });

  it(`returns false if provided argument is an instance of native type`, () => {
    expect(isConstructor(null)).to.be.false;
    expect(isConstructor(undefined)).to.be.false;
    expect(isConstructor(false)).to.be.false;
    expect(isConstructor(true)).to.be.false;
    expect(isConstructor('abcd')).to.be.false;
    expect(isConstructor(1234)).to.be.false;
    expect(isConstructor(new Date())).to.be.false;
    expect(
      isConstructor((): void => {
        return undefined;
      })
    ).to.be.false;
    expect(isConstructor(/fail/)).to.be.false;
    expect(isConstructor(new Error())).to.be.false;
    expect(isConstructor(new EvalError())).to.be.false;
    expect(isConstructor(new RangeError())).to.be.false;
    expect(isConstructor(new ReferenceError())).to.be.false;
    expect(isConstructor(new SyntaxError())).to.be.false;
    expect(isConstructor(new TypeError())).to.be.false;
    expect(isConstructor(new URIError())).to.be.false;
    expect(isConstructor(new MyError())).to.be.false;
    expect(
      isConstructor({
        my: 'value',
      })
    ).to.be.false;
  });

  it(`returns false if provided argument is a instance of non-native types(classes)`, () => {
    expect(isConstructor(new MyClass())).to.be.false;
  });
});
