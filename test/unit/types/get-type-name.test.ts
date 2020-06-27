import { expect } from 'chai';
import { getTypeName } from '../../../src/types/get-type-name';
import { TYPE_NAME_KEY } from '../../../src/constants/metadata-keys';
import 'reflect-metadata';

describe(`getTypeName`, () => {
  const parentTypeName = 'Namespace.SerializableParent';
  class SerializableParent {}
  Reflect.defineMetadata(TYPE_NAME_KEY, parentTypeName, SerializableParent);
  const childTypeName = 'Namespace.SerializableChild';
  class SerializableChild {}
  Reflect.defineMetadata(TYPE_NAME_KEY, childTypeName, SerializableChild);

  class Parent {}
  class Child extends Parent {}

  describe('returning constructor name', () => {
    it('returns constructor name from class', () => {
      expect(getTypeName(Parent)).to.be.equal('Parent');
    });

    it('returns constructor name from class instance', () => {
      expect(getTypeName(new Parent())).to.be.equal('Parent');
    });

    it('returns constructor name from child class instance', () => {
      expect(getTypeName(new Child())).to.be.equal('Child');
    });
  });

  describe('returning type name', () => {
    it('returns type name from serializable class', () => {
      expect(getTypeName(SerializableParent)).to.be.equal(
        'Namespace.SerializableParent'
      );
    });

    it('returns type name from serializable class instance', () => {
      expect(getTypeName(new SerializableParent())).to.be.equal(
        'Namespace.SerializableParent'
      );
    });

    it('returns type name from serializable child class instance', () => {
      expect(getTypeName(new SerializableChild())).to.be.equal(
        'Namespace.SerializableChild'
      );
    });
  });

  describe('returning constructor name for native types', () => {
    it(`returns constructor name for String`, () => {
      expect(getTypeName(String)).to.be.equal('String');
    });

    it(`returns constructor name for Number`, () => {
      expect(getTypeName(Number)).to.be.equal('Number');
    });

    it(`returns constructor name for Date`, () => {
      expect(getTypeName(Date)).to.be.equal('Date');
    });

    it(`returns constructor name for RegExp`, () => {
      expect(getTypeName(RegExp)).to.be.equal('RegExp');
    });

    it(`returns constructor name for Array`, () => {
      expect(getTypeName(Array)).to.be.equal('Array');
    });

    it(`returns constructor name for Function`, () => {
      expect(getTypeName(Function)).to.be.equal('Function');
    });

    it(`returns constructor name for Object`, () => {
      expect(getTypeName(Object)).to.be.equal('Object');
    });

    it(`returns constructor name for Error`, () => {
      expect(getTypeName(Error)).to.be.equal('Error');
    });

    it(`returns undefined for undefined`, () => {
      expect(getTypeName(undefined)).to.be.equal(undefined);
    });

    it(`returns undefined for null`, () => {
      expect(getTypeName(null)).to.be.equal(undefined);
    });
  });

  describe('returning constructor name for native type instances', () => {
    it(`returns constructor name for string literal`, () => {
      expect(getTypeName('my-string')).to.be.equal('String');
    });

    it(`returns constructor name for number literal`, () => {
      expect(getTypeName(5)).to.be.equal('Number');
    });

    it(`returns constructor name for object literal`, () => {
      expect(getTypeName({})).to.be.equal('Object');
    });

    it(`returns constructor name for array literal`, () => {
      expect(getTypeName([])).to.be.equal('Array');
    });
    it(`returns constructor name for boolean false`, () => {
      expect(getTypeName(false)).to.be.equal('Boolean');
    });

    it(`returns constructor name for boolean true`, () => {
      expect(getTypeName(true)).to.be.equal('Boolean');
    });

    it(`returns constructor name for instance of Date`, () => {
      expect(getTypeName(new Date())).to.be.equal('Date');
    });

    it(`returns constructor name for instance of RegExp`, () => {
      expect(getTypeName(/match/)).to.be.equal('RegExp');
    });

    it(`returns constructor name for instance of Error`, () => {
      expect(getTypeName(new Error())).to.be.equal('Error');
    });

    it(`returns constructor name for instance of Symbol`, () => {
      expect(getTypeName(Symbol('key'))).to.be.equal('Symbol');
    });

    it(`returns constructor name for instance of Map`, () => {
      expect(getTypeName(new Map([['key', 'value']]))).to.be.equal('Map');
    });

    it(`returns constructor name for instance of Function`, () => {
      expect(
        getTypeName((): void => {
          return undefined;
        })
      ).to.be.equal('Function');
    });
  });
});
