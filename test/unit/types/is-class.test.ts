import { expect } from 'chai';
import { isClass } from '../../../src/types/is-class';

describe(`isClass`, () => {
  context('with valid class', () => {
    it(`returns true if value is a class`, () => {
      class MyClass {}
      expect(isClass(MyClass)).to.be.true;
    });

    it('returns true even if class has custom toString method', () => {
      class MyOtherClass {
        static toString(): string {
          return 'some-custom-class-name';
        }
      }
      expect(isClass(MyOtherClass)).to.be.true;
    });
  });

  context('with other types', () => {
    it(`returns false for native types instances`, () => {
      expect(
        isClass((): void => undefined),
        'Expected function to not be class'
      ).to.be.false;
      expect(isClass(''), `Expected String('') to not be class`).to.be.false;
      expect(isClass(0), 'Expected Number(0) to not be class').to.be.false;
      expect(isClass(1), 'Expected Number(1) to not be class').to.be.false;

      expect(isClass(null), 'Expected null to not be class').to.be.false;
      expect(isClass(undefined), 'Expected undefined to not be class').to.be
        .false;
    });

    it(`returns false for native types inheriting object`, () => {
      expect(isClass({}), 'Expected Object to not be class').to.be.false;
      expect(isClass([]), 'Expected Array to not be class').to.be.false;
      expect(isClass(true), 'Expected Boolean(true) to not be class').to.be
        .false;
      expect(isClass(false), 'Expected Boolean(false) to not be class').to.be
        .false;
      expect(isClass(String), 'Expected String to not be class').to.be.false;
      expect(isClass(Boolean), 'Expected Boolean to not be class').to.be.false;
      expect(isClass(Date), 'Expected Date to not be class').to.be.false;
      expect(isClass(Number), 'Expected Number to not be class').to.be.false;
      expect(isClass(RegExp), 'Expected RegExp to not be class').to.be.false;
      expect(isClass(Array), 'Expected Array to not be class').to.be.false;
      expect(isClass(Function), 'Expected Function to not be class').to.be
        .false;
      expect(isClass(Object), 'Expected Object to not be class').to.be.false;
      expect(isClass(Function), 'Expected Function to not be class').to.be;
      expect(isClass(Symbol), 'Expected Symbol to not be class').to.be;
      expect(isClass(Map), 'Expected Map to not be class').to.be.false;
      expect(isClass(RegExp), 'Expected RegExp to not be class').to.be.false;
    });
  });
});
