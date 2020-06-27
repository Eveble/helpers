import { expect } from 'chai';
import { isSubclassOf } from '../../../src/types/is-subclass-of';

describe(`isSubclassOf`, () => {
  class Parent {}
  class Child extends Parent {}

  context('with valid relation', () => {
    it(`returns true if argument is child(subclass) of another parent(class)`, () => {
      expect(isSubclassOf(Child, Parent)).to.be.true;
    });

    it(`returns false if parent(class) is compared against child(subclass)`, () => {
      expect(isSubclassOf(Parent, Child)).to.be.false;
    });
  });

  context('with other types', () => {
    it(`returns false if argument is primitive type`, () => {
      expect(
        isSubclassOf((): void => {
          return undefined;
        }, Parent),
        'expected function to not be subclass'
      ).to.be.false;
      expect(isSubclassOf('', Parent), 'expected string to not be subclass').to
        .be.false;
      expect(isSubclassOf(0, Parent), 'expected number(0) to not be subclass')
        .to.be.false;
      expect(isSubclassOf(1, Parent), 'expected number(1) to not be subclass')
        .to.be.false;
      expect(
        isSubclassOf(true, Parent),
        'expected boolean(true) to not be subclass'
      ).to.be.false;
      expect(
        isSubclassOf(false, Parent),
        'expected boolean(false) to not be subclass'
      ).to.be.false;
      expect(isSubclassOf(null, Parent), 'expected null to not be subclass').to
        .be.false;
      expect(
        isSubclassOf(undefined, Parent),
        'expected undefined to not be subclass'
      ).to.be.false;
    });

    it(`returns false if argument is inheriting object`, () => {
      expect(isSubclassOf({}, Parent), 'expected object to not be subclass').to
        .be.false;
      expect(isSubclassOf([], Parent), 'expected array to not be subclass').to
        .be.false;
      expect(isSubclassOf(String, Parent), 'expected String to not be subclass')
        .to.be.false;
      expect(
        isSubclassOf(Boolean, Parent),
        'expected Boolean to not be subclass'
      ).to.be.false;
      expect(isSubclassOf(Date, Parent), 'expected Date to not be subclass').to
        .be.false;
      expect(isSubclassOf(Number, Parent), 'expected Number to not be subclass')
        .to.be.false;
      expect(isSubclassOf(RegExp, Parent), 'expected RegExp to not be subclass')
        .to.be.false;
      expect(isSubclassOf(Array, Parent), 'expected Array to not be subclass')
        .to.be.false;
      expect(
        isSubclassOf(Function, Parent),
        'expected Function to not be subclass'
      ).to.be.false;
      expect(isSubclassOf(Object, Parent), 'expected Object to not be subclass')
        .to.be.false;
    });
  });
});
