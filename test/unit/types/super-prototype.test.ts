import { expect } from 'chai';
import { superPrototype } from '../../../src/types/super-prototype';

describe(`superPrototype`, () => {
  class Parent {}
  class Child extends Parent {}
  class GrandChild extends Child {}

  it(`returns parent class prototype from child class`, () => {
    expect(superPrototype(Child)).to.be.equal(Parent.prototype);
  });

  it(`returns child class prototype from grand child class`, () => {
    expect(superPrototype(GrandChild)).to.be.equal(Child.prototype);
  });

  it(`ensures that parent class prototype is not returned from grand child`, () => {
    expect(superPrototype(GrandChild)).to.be.not.equal(Parent.prototype);
  });

  it(`returns parent class prototype from child instance`, () => {
    expect(superPrototype(new Child())).to.be.equal(Parent.prototype);
  });

  it(`returns child class prototype from grand child instance`, () => {
    expect(superPrototype(new GrandChild())).to.be.equal(Child.prototype);
  });

  it(`ensures that parent class prototype is not returned from grand child instance`, () => {
    expect(superPrototype(new GrandChild())).to.be.not.equal(Parent.prototype);
  });

  it(`returns undefined if parent class is last on inheritance chain`, () => {
    expect(superPrototype(Parent)).to.be.equal(undefined);
  });

  it(`returns undefined if value is not class`, () => {
    expect(
      superPrototype(undefined),
      'expected undefined to not be class'
    ).to.be.equal(undefined);
    expect(superPrototype(null), 'expected string to not be class').to.be.equal(
      undefined
    );
    expect(superPrototype({}), 'expected string to not be class').to.be.equal(
      undefined
    );
  });
});
