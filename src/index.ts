// Constants
import * as LITERAL from './constants/literal';
import * as METADATA_KEYS from './constants/metadata-keys';
// Types
import { types } from './types';
// Testing
import { isMocha } from './testing/is-mocha';
import { isMochaInWatchMode } from './testing/is-mocha-in-watch-mode';
import { isSinonClockDate } from './testing/is-sinon-clock-date';
// Types
import { getNativeType } from './types/get-native-type';
import { getScalarType } from './types/get-scalar-type';
import { getTypeName } from './types/get-type-name';
import { hasTypeName } from './types/has-type-name';
import { setTypeName } from './types/set-type-name';
import { isClassInstance } from './types/is-class-instance';
import { isClass } from './types/is-class';
import { isConstructor } from './types/is-constructor';
import { isErrorClass } from './types/is-error-class';
import { isErrorInstance } from './types/is-error-instance';
import { isMultidimensionalArray } from './types/is-multidimensional-array';
import { isNativeType } from './types/is-native-type';
import { isNativeTypeInstance } from './types/is-native-type-instance';
import { isScalarType } from './types/is-scalar-type';
import { isSubclassOf } from './types/is-subclass-of';
import { superClass } from './types/super-class';
import { superPrototype } from './types/super-prototype';

export {
  // Constants
  LITERAL,
  METADATA_KEYS,
  // Types
  types,
  // Testing
  isMocha,
  isMochaInWatchMode,
  isSinonClockDate,
  // Types
  getNativeType,
  getScalarType,
  getTypeName,
  hasTypeName,
  setTypeName,
  isClassInstance,
  isClass,
  isConstructor,
  isErrorClass,
  isErrorInstance,
  isMultidimensionalArray,
  isNativeType,
  isNativeTypeInstance,
  isScalarType,
  isSubclassOf,
  superClass,
  superPrototype,
};
