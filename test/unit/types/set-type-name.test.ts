import { expect } from 'chai';
import 'reflect-metadata';
import { setTypeName } from '../../../src/types/set-type-name';
import { TYPE_NAME_KEY } from '../../../src/constants/metadata-keys';

describe(`getTypeName`, () => {
  class SerializableParent {}

  class SerializableChild {}

  describe('returning type name', () => {
    it('sets type name from serializable class', () => {
      const typeName = 'Namespace.SerializableParent';
      setTypeName(SerializableParent, typeName);
      expect(
        Reflect.getOwnMetadata(TYPE_NAME_KEY, SerializableParent)
      ).to.be.equal(typeName);
    });

    it('ensures that type name set on parent class do not leak to child classes and vice versa', () => {
      const parentTypeName = 'Namespace.SerializableParent';
      setTypeName(SerializableParent, parentTypeName);
      const childTypeName = 'Namespace.SerializableChild';
      setTypeName(SerializableChild, childTypeName);
      expect(
        Reflect.getOwnMetadata(TYPE_NAME_KEY, SerializableParent)
      ).to.be.equal(parentTypeName);
      expect(
        Reflect.getOwnMetadata(TYPE_NAME_KEY, SerializableChild)
      ).to.be.equal(childTypeName);
    });
  });
});
