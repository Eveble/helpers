---
id: "globals"
title: "@eveble/helpers"
sidebar_label: "Globals"
---

## Index

### Namespaces

* [types](modules/types.md)

### Classes

* [MyClass](classes/myclass.md)

### Variables

* [NATIVE_CONSTRUCTOR_NAMES](globals.md#const-native_constructor_names)
* [NATIVE_ERROR_CLASSES](globals.md#const-native_error_classes)
* [TYPE_NAME_KEY](globals.md#const-type_name_key)

### Functions

* [getNativeType](globals.md#getnativetype)
* [getScalarType](globals.md#getscalartype)
* [getTypeName](globals.md#gettypename)
* [hasTypeName](globals.md#hastypename)
* [isClass](globals.md#isclass)
* [isClassInstance](globals.md#isclassinstance)
* [isConstructor](globals.md#isconstructor)
* [isErrorClass](globals.md#const-iserrorclass)
* [isErrorInstance](globals.md#iserrorinstance)
* [isMocha](globals.md#ismocha)
* [isMochaInWatchMode](globals.md#ismochainwatchmode)
* [isMultidimensionalArray](globals.md#ismultidimensionalarray)
* [isNativeType](globals.md#isnativetype)
* [isNativeTypeInstance](globals.md#isnativetypeinstance)
* [isScalarType](globals.md#isscalartype)
* [isSinonClockDate](globals.md#issinonclockdate)
* [isSubclassOf](globals.md#issubclassof)
* [setTypeName](globals.md#settypename)
* [superClass](globals.md#superclass)
* [superPrototype](globals.md#superprototype)

### Object literals

* [NATIVE_TYPES](globals.md#const-native_types)

## Variables

### `Const` NATIVE_CONSTRUCTOR_NAMES

• **NATIVE_CONSTRUCTOR_NAMES**: *string[]* = [
  'String',
  'Boolean',
  'Date',
  'Number',
  'RegExp',
  'Array',
  'Symbol',
  'Map',
  'Function',
  'Object',
]

___

### `Const` NATIVE_ERROR_CLASSES

• **NATIVE_ERROR_CLASSES**: *ErrorConstructor[]* = [
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
]

___

### `Const` TYPE_NAME_KEY

• **TYPE_NAME_KEY**: *unique symbol* = Symbol('eveble:typeName')

## Functions

###  getNativeType

▸ **getNativeType**(`arg`: any): *[NativeType](modules/types.md#nativetype) | null*

Returns native type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument as a native type or instance of native type. |

**Returns:** *[NativeType](modules/types.md#nativetype) | null*

Returns native type constructor if applicable, else null.

___

###  getScalarType

▸ **getScalarType**(`arg`: any): *[ScalarType](modules/types.md#scalartype) | null*

Returns scalar type for argument(single discrete value vs non-scalar arguments like objects, arrays that are collection of discrete values).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument as a scalar type. |

**Returns:** *[ScalarType](modules/types.md#scalartype) | null*

Returns scalar type as a a string if applicable, else null.

___

###  getTypeName

▸ **getTypeName**(`arg`: any): *[TypeName](modules/types.md#typename) | undefined*

Returns argument name as its type name(if its serializable) or constructor's name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument as a class constructor. |

**Returns:** *[TypeName](modules/types.md#typename) | undefined*

Argument name as a TypeName(string), else undefined.

___

###  hasTypeName

▸ **hasTypeName**(`arg`: any): *boolean*

Evaluates if argument has its own type name(if its serializable)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument as a class constructor. |

**Returns:** *boolean*

Returns `true` if argument has own type name, else `false`.

___

###  isClass

▸ **isClass**(`arg`: any): *boolean*

Evaluates if passed argument is a class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a class constructor, else false.

___

###  isClassInstance

▸ **isClassInstance**(`arg`: any): *boolean*

Evaluates if provided argument is instance of a class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a class instance, else false.

___

###  isConstructor

▸ **isConstructor**(`arg`: any): *boolean*

Evaluates if provided argument is constructor(of class, error or native type).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument for evaluation. |

**Returns:** *boolean*

Returns true if argument is a constructor for class, error or native type, else false.

___

### `Const` isErrorClass

▸ **isErrorClass**(`arg`: any): *boolean*

Evaluates if provided argument is an error class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument for evaluation. |

**Returns:** *boolean*

Returns true if argument is an error class, else false.

___

###  isErrorInstance

▸ **isErrorInstance**(`arg`: any): *boolean*

Evaluates if provided argument is an instance of an error class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is an error class instance, else false.

___

###  isMocha

▸ **isMocha**(`context`: any): *boolean*

Evaluates if Mocha is running on context(global/window) i.e. testing environment is present.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | any | Global context which is evaluated. |

**Returns:** *boolean*

Returns true if Mocha is running on context, else false.

___

###  isMochaInWatchMode

▸ **isMochaInWatchMode**(): *boolean*

Evaluates if Mocha is running in watch('--watch') mode.

**Returns:** *boolean*

Returns true if Mocha is running in watch mode, else false.

___

###  isMultidimensionalArray

▸ **isMultidimensionalArray**(`arg`: any): *boolean*

Evaluates if array argument is multidimensional(is nested array).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a multidimensional array, else false.

___

###  isNativeType

▸ **isNativeType**(`arg`: any): *boolean*

Evaluates if provided argument is constructor of one of native types.

**`example`** 
isNativeType(String) // true
isNativeType('my-string-value') // false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a native type, else false.

___

###  isNativeTypeInstance

▸ **isNativeTypeInstance**(`arg`: any): *boolean*

Evaluates if provided argument is instance of native type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a instance of native type, else false.

___

###  isScalarType

▸ **isScalarType**(`arg`: any): *boolean*

Evaluates if argument is scalar type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument to evaluate. |

**Returns:** *boolean*

Returns true if argument is a scalar type, else false.

___

###  isSinonClockDate

▸ **isSinonClockDate**(`value`: any): *boolean*

Evaluates if Date has been replaced with sinon's ClockDate(when test's are using sinon.useFakeTimers)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Value that will be evaluated if its a constructor of sinon's ClockDate. |

**Returns:** *boolean*

Returns true if value is a sinon ClockDate, else false.

___

###  isSubclassOf

▸ **isSubclassOf**(`child`: any, `parent`: any): *boolean*

Evaluates if provided child class is inheriting from parent class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`child` | any | Child class constructor. |
`parent` | any | Parent class constructor. |

**Returns:** *boolean*

Returns true if child class is subclass of parent class, else false.

___

###  setTypeName

▸ **setTypeName**(`arg`: any, `typeName`: [TypeName](modules/types.md#typename)): *void*

Sets type name for argument as metadata assigned to constructor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | Argument as a class constructor.  |
`typeName` | [TypeName](modules/types.md#typename) | - |

**Returns:** *void*

___

###  superClass

▸ **superClass**(`child`: any): *Function | undefined*

Get the parent class from child.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`child` | any | Child class constructor or instance. |

**Returns:** *Function | undefined*

Returns parent class if exists, else undefined.

___

###  superPrototype

▸ **superPrototype**(`child`: any): *Record‹keyof any, any› | undefined*

Get the parent class prototype from child class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`child` | any | Child class constructor or instance. |

**Returns:** *Record‹keyof any, any› | undefined*

Returns parent prototype if exists, else undefined.

## Object literals

### `Const` NATIVE_TYPES

### ▪ **NATIVE_TYPES**: *object*

###  array

• **array**: *ArrayConstructor* = Array

###  boolean

• **boolean**: *BooleanConstructor* = Boolean

###  date

• **date**: *DateConstructor* = Date

###  function

• **function**: *FunctionConstructor* = Function

###  map

• **map**: *MapConstructor* = Map

###  number

• **number**: *NumberConstructor* = Number

###  object

• **object**: *ObjectConstructor* = Object

###  regexp

• **regexp**: *RegExpConstructor* = RegExp

###  string

• **string**: *StringConstructor* = String

###  symbol

• **symbol**: *SymbolConstructor* = Symbol
