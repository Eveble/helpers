import { expect } from 'chai';
import { isErrorInstance } from '../../../src/types/is-error-instance';

describe('isErrorInstance', () => {
  class MyClass {}
  class MyError extends Error {}

  it(`returns true if its a error class instance`, () => {
    expect(isErrorInstance(new Error())).to.be.true;
    expect(isErrorInstance(new EvalError())).to.be.true;
    expect(isErrorInstance(new RangeError())).to.be.true;
    expect(isErrorInstance(new ReferenceError())).to.be.true;
    expect(isErrorInstance(new SyntaxError())).to.be.true;
    expect(isErrorInstance(new TypeError())).to.be.true;
    expect(isErrorInstance(new URIError())).to.be.true;
    expect(isErrorInstance(new MyError())).to.be.true;
  });

  it(`returns false if its not a error class instance`, () => {
    expect(isErrorInstance(new MyClass())).to.be.false;
    expect(isErrorInstance({})).to.be.false;
    expect(isErrorInstance(1234)).to.be.false;
    const fn: () => null = function (): null {
      return null;
    };
    expect(isErrorInstance(fn)).to.be.false;
    expect(isErrorInstance(MyClass)).to.be.false;
    expect(isErrorInstance(Error)).to.be.false;
    expect(isErrorInstance(MyError)).to.be.false;
  });
});
