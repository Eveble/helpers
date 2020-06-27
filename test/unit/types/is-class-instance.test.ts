import { expect } from 'chai';
import { isClassInstance } from '../../../src/types/is-class-instance';

describe('isClassInstance', () => {
  class MyClass {}
  class MyError extends Error {}

  it(`returns true if its a class instance`, () => {
    expect(isClassInstance(new MyClass())).to.be.true;
    expect(isClassInstance(new Error())).to.be.true;
    expect(isClassInstance(new EvalError())).to.be.true;
    expect(isClassInstance(new RangeError())).to.be.true;
    expect(isClassInstance(new ReferenceError())).to.be.true;
    expect(isClassInstance(new SyntaxError())).to.be.true;
    expect(isClassInstance(new TypeError())).to.be.true;
    expect(isClassInstance(new URIError())).to.be.true;
    expect(isClassInstance(new MyError())).to.be.true;
  });

  it(`returns false if its not a class instance`, () => {
    expect(isClassInstance({})).to.be.false;
    expect(isClassInstance(1234)).to.be.false;
    expect(isClassInstance('my-string')).to.be.false;
    const fn: () => null = function(): null {
      return null;
    };
    expect(isClassInstance(fn)).to.be.false;
    expect(isClassInstance(MyClass)).to.be.false;
    expect(isClassInstance(Error)).to.be.false;
    expect(isClassInstance(MyError)).to.be.false;
  });
});
