import { expect } from 'chai';
import { isErrorClass } from '../../../src/types/is-error-class';

describe(`isErrorClass`, () => {
  class MyClass {}
  class MyError extends Error {}

  it(`returns true if provided argument is a constructor for error class`, () => {
    expect(isErrorClass(Error)).to.be.true;
    expect(isErrorClass(EvalError)).to.be.true;
    expect(isErrorClass(RangeError)).to.be.true;
    expect(isErrorClass(ReferenceError)).to.be.true;
    expect(isErrorClass(SyntaxError)).to.be.true;
    expect(isErrorClass(TypeError)).to.be.true;
    expect(isErrorClass(URIError)).to.be.true;
    expect(isErrorClass(MyError)).to.be.true;
  });

  it(`returns false if provided argument is a constructor for non-native types(classes)`, () => {
    expect(isErrorClass(MyClass)).to.be.false;
  });

  it(`returns false if provided argument is an instance`, () => {
    expect(isErrorClass(null)).to.be.false;
    expect(isErrorClass(undefined)).to.be.false;
    expect(isErrorClass(false)).to.be.false;
    expect(isErrorClass(true)).to.be.false;
    expect(isErrorClass('abcd')).to.be.false;
    expect(isErrorClass(1234)).to.be.false;
    expect(isErrorClass(new Date())).to.be.false;
    expect(isErrorClass((): void => undefined)).to.be.false;
    expect(isErrorClass(/fail/)).to.be.false;
    expect(isErrorClass(new MyClass())).to.be.false;
    expect(isErrorClass(new Error())).to.be.false;
    expect(isErrorClass(new EvalError())).to.be.false;
    expect(isErrorClass(new RangeError())).to.be.false;
    expect(isErrorClass(new ReferenceError())).to.be.false;
    expect(isErrorClass(new SyntaxError())).to.be.false;
    expect(isErrorClass(new TypeError())).to.be.false;
    expect(isErrorClass(new URIError())).to.be.false;
    expect(isErrorClass(new MyError())).to.be.false;
    expect(
      isErrorClass({
        my: 'value',
      })
    ).to.be.false;
  });

  it(`returns false for non-error native type constructors`, () => {
    expect(isErrorClass(String)).to.be.false;
    expect(isErrorClass(Boolean)).to.be.false;
    expect(isErrorClass(Date)).to.be.false;
    expect(isErrorClass(Number)).to.be.false;
    expect(isErrorClass(RegExp)).to.be.false;
    expect(isErrorClass(Array)).to.be.false;
    expect(isErrorClass(Function)).to.be.false;
    expect(isErrorClass(Object)).to.be.false;
  });
});
