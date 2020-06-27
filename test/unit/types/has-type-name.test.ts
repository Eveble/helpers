import { expect } from 'chai';
import { hasTypeName } from '../../../src/types/has-type-name';
import { TYPE_NAME_KEY } from '../../../src/constants/metadata-keys';
import 'reflect-metadata';

describe(`hasTypeName`, () => {
  const parentTypeName = 'Namespace.SerializableParent';
  class SerializableParent {}
  Reflect.defineMetadata(TYPE_NAME_KEY, parentTypeName, SerializableParent);
  const childTypeName = 'Namespace.SerializableChild';
  class SerializableChild {}
  Reflect.defineMetadata(TYPE_NAME_KEY, childTypeName, SerializableChild);

  class Parent {}
  class Child extends Parent {}

  describe('classes', () => {
    it('returns false for constructor', () => {
      expect(hasTypeName(Parent)).to.be.false;
    });

    it('returns false for class instance', () => {
      expect(hasTypeName(new Parent())).to.be.false;
    });

    it('returns false for child class instance', () => {
      expect(hasTypeName(new Child())).to.be.false;
    });
  });

  describe('serializables', () => {
    it('returns true for serializable class', () => {
      expect(hasTypeName(SerializableParent)).to.be.true;
    });

    it('returns true for serializable class instance', () => {
      expect(hasTypeName(new SerializableParent())).to.be.true;
    });

    it('returns true for serializable child class instance', () => {
      expect(hasTypeName(new SerializableChild())).to.be.true;
    });
  });

  describe('native types', () => {
    it(`returns false for String`, () => {
      expect(hasTypeName(String)).to.be.false;
    });

    it(`returns false for Number`, () => {
      expect(hasTypeName(Number)).to.be.false;
    });

    it(`returns false for Date`, () => {
      expect(hasTypeName(Date)).to.be.false;
    });

    it(`returns false for RegExp`, () => {
      expect(hasTypeName(RegExp)).to.be.false;
    });

    it(`returns false for Array`, () => {
      expect(hasTypeName(Array)).to.be.false;
    });

    it(`returns false for Function`, () => {
      expect(hasTypeName(Function)).to.be.false;
    });

    it(`returns false for Object`, () => {
      expect(hasTypeName(Object)).to.be.false;
    });

    it(`returns false for Error`, () => {
      expect(hasTypeName(Error)).to.be.false;
    });

    it(`returns false for undefined`, () => {
      expect(hasTypeName(undefined)).to.be.false;
    });

    it(`returns false for null`, () => {
      expect(hasTypeName(null)).to.be.false;
    });
  });

  describe('native type instances', () => {
    it(`returns constructor name for string literal`, () => {
      expect(hasTypeName('my-string')).to.be.false;
    });

    it(`returns false for number literal`, () => {
      expect(hasTypeName(5)).to.be.false;
    });

    it(`returns false for object literal`, () => {
      expect(hasTypeName({})).to.be.false;
    });

    it(`returns false for array literal`, () => {
      expect(hasTypeName([])).to.be.false;
    });
    it(`returns false for boolean false`, () => {
      expect(hasTypeName(false)).to.be.false;
    });

    it(`returns false for boolean true`, () => {
      expect(hasTypeName(true)).to.be.false;
    });

    it(`returns false for instance of Date`, () => {
      expect(hasTypeName(new Date())).to.be.false;
    });

    it(`returns false for instance of RegExp`, () => {
      expect(hasTypeName(/match/)).to.be.false;
    });

    it(`returns false for instance of Error`, () => {
      expect(hasTypeName(new Error())).to.be.false;
    });

    it(`returns false for instance of Symbol`, () => {
      expect(hasTypeName(Symbol('key'))).to.be.false;
    });

    it(`returns false for instance of Map`, () => {
      expect(hasTypeName(new Map([['key', 'value']]))).to.be.false;
    });

    it(`returns false for instance of Function`, () => {
      expect(
        hasTypeName((): void => {
          return undefined;
        })
      ).to.be.false;
    });
  });
});
