import { expect } from 'chai';
// Constants
import * as LITERAL from '../../src/constants/literal';
import * as METADATA_KEYS from '../../src/constants/metadata-keys';
// Testing
import { isMocha } from '../../src/testing/is-mocha';
import { isMochaInWatchMode } from '../../src/testing/is-mocha-in-watch-mode';
import { isSinonClockDate } from '../../src/testing/is-sinon-clock-date';
// Types
import { getNativeType } from '../../src/types/get-native-type';
import { getScalarType } from '../../src/types/get-scalar-type';
import { getTypeName } from '../../src/types/get-type-name';
import { hasTypeName } from '../../src/types/has-type-name';
import { setTypeName } from '../../src/types/set-type-name';
import { isClassInstance } from '../../src/types/is-class-instance';
import { isClass } from '../../src/types/is-class';
import { isConstructor } from '../../src/types/is-constructor';
import { isErrorClass } from '../../src/types/is-error-class';
import { isErrorInstance } from '../../src/types/is-error-instance';
import { isMultidimensionalArray } from '../../src/types/is-multidimensional-array';
import { isNativeType } from '../../src/types/is-native-type';
import { isNativeTypeInstance } from '../../src/types/is-native-type-instance';
import { isScalarType } from '../../src/types/is-scalar-type';
import { isSubclassOf } from '../../src/types/is-subclass-of';
import { superClass } from '../../src/types/super-class';
import { superPrototype } from '../../src/types/super-prototype';

import {
  // Constants
  LITERAL as LITERAL_EXPORTED,
  METADATA_KEYS as METADATA_KEYS_EXPORTED,
  // Testing
  isMocha as isMochaExported,
  isMochaInWatchMode as isMochaInWatchModeExported,
  isSinonClockDate as isSinonClockDateExported,
  // Types
  getNativeType as getNativeTypeExported,
  getScalarType as getScalarTypeExported,
  getTypeName as getTypeNameExported,
  hasTypeName as hasTypeNameExported,
  setTypeName as setTypeNameExported,
  isClassInstance as isClassInstanceExported,
  isClass as isClassExported,
  isConstructor as isConstructorExported,
  isErrorClass as isErrorClassExported,
  isErrorInstance as isErrorInstanceExported,
  isMultidimensionalArray as isMultidimensionalArrayExported,
  isNativeType as isNativeTypeExported,
  isNativeTypeInstance as isNativeTypeInstanceExported,
  isScalarType as isScalarTypeExported,
  isSubclassOf as isSubclassOfExported,
  superClass as superClassExported,
  superPrototype as superPrototypeExported,
} from '../../src/index';

describe('exports', () => {
  describe('constants', () => {
    it('LITERAL', () => {
      expect(LITERAL_EXPORTED).to.be.equal(LITERAL);
    });
    it('METADATA_KEYS', () => {
      expect(METADATA_KEYS_EXPORTED).to.be.equal(METADATA_KEYS);
    });
  });

  describe('testing', () => {
    it('isMocha', () => {
      expect(isMochaExported).to.be.equal(isMocha);
    });
    it('isMochaInWatchMode', () => {
      expect(isMochaInWatchModeExported).to.be.equal(isMochaInWatchMode);
    });
    it('isSinonClockDate', () => {
      expect(isSinonClockDateExported).to.be.equal(isSinonClockDate);
    });
  });

  describe('types', () => {
    it('getNativeType', () => {
      expect(getNativeTypeExported).to.be.equal(getNativeType);
    });
    it('getScalarType', () => {
      expect(getScalarTypeExported).to.be.equal(getScalarType);
    });
    it('getTypeName', () => {
      expect(getTypeNameExported).to.be.equal(getTypeName);
    });
    it('hasTypeName', () => {
      expect(hasTypeNameExported).to.be.equal(hasTypeName);
    });
    it('setTypeName', () => {
      expect(setTypeNameExported).to.be.equal(setTypeName);
    });
    it('isClassInstance', () => {
      expect(isClassInstanceExported).to.be.equal(isClassInstance);
    });
    it('isClass', () => {
      expect(isClassExported).to.be.equal(isClass);
    });
    it('isConstructor', () => {
      expect(isConstructorExported).to.be.equal(isConstructor);
    });
    it('isErrorClass', () => {
      expect(isErrorClassExported).to.be.equal(isErrorClass);
    });
    it('isErrorInstance', () => {
      expect(isErrorInstanceExported).to.be.equal(isErrorInstance);
    });
    it('isMultidimensionalArray', () => {
      expect(isMultidimensionalArrayExported).to.be.equal(
        isMultidimensionalArray
      );
    });
    it('isNativeType', () => {
      expect(isNativeTypeExported).to.be.equal(isNativeType);
    });
    it('isNativeTypeInstance', () => {
      expect(isNativeTypeInstanceExported).to.be.equal(isNativeTypeInstance);
    });
    it('isScalarType', () => {
      expect(isScalarTypeExported).to.be.equal(isScalarType);
    });
    it('isSubclassOf', () => {
      expect(isSubclassOfExported).to.be.equal(isSubclassOf);
    });
    it('superClass', () => {
      expect(superClassExported).to.be.equal(superClass);
    });
    it('superPrototype', () => {
      expect(superPrototypeExported).to.be.equal(superPrototype);
    });
  });
});
