import { expect } from 'chai';
import { superClass } from '../../../src/types/super-class';

describe(`superClass`, () => {
  class Parent {}
  class Child extends Parent {}
  class GrandChild extends Child {}

  it(`returns parent class from child class`, () => {
    expect(superClass(Child)).to.be.equal(Parent);
  });

  it(`returns child class from grand child class`, () => {
    expect(superClass(GrandChild)).to.be.equal(Child);
  });

  it(`ensures that parent class is not returned from grand child`, () => {
    expect(superClass(GrandChild)).to.be.not.equal(Parent);
  });

  it(`returns parent class from child instance`, () => {
    expect(superClass(new Child())).to.be.equal(Parent);
  });

  it(`returns child class from grand child instance`, () => {
    expect(superClass(new GrandChild())).to.be.equal(Child);
  });

  it(`ensures that parent class is not returned from grand child instance`, () => {
    expect(superClass(new GrandChild())).to.be.not.equal(Parent);
  });

  it(`returns undefined if parent class is last on inheritance chain`, () => {
    expect(superClass(Parent)).to.be.equal(undefined);
  });

  it(`returns undefined if value is not class`, () => {
    expect(
      superClass(undefined),
      'expected undefined to not be class'
    ).to.be.equal(undefined);
    expect(superClass(null), 'expected string to not be class').to.be.equal(
      undefined
    );
    expect(superClass({}), 'expected string to not be class').to.be.equal(
      undefined
    );
  });
});
