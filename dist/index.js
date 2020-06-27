'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reflect-metadata');

const NATIVE_ERROR_CLASSES = [
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
];
const NATIVE_TYPES = {
    string: String,
    boolean: Boolean,
    date: Date,
    number: Number,
    regexp: RegExp,
    array: Array,
    symbol: Symbol,
    map: Map,
    function: Function,
    object: Object,
};
const NATIVE_CONSTRUCTOR_NAMES = [
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
];

var literal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NATIVE_ERROR_CLASSES: NATIVE_ERROR_CLASSES,
  NATIVE_TYPES: NATIVE_TYPES,
  NATIVE_CONSTRUCTOR_NAMES: NATIVE_CONSTRUCTOR_NAMES
});

const TYPE_NAME_KEY = Symbol('eveble:typeName');

var metadataKeys = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TYPE_NAME_KEY: TYPE_NAME_KEY
});

function isMocha(context) {
    return ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it'].every((fnName) => {
        return context[fnName] instanceof Function;
    });
}

function isMochaInWatchMode(nodeProcess) {
    return nodeProcess.argv.slice(2).includes('--watch');
}

function isSinonClockDate(value) {
    return (value.name !== undefined &&
        /^ClockDate$/.test(value.name) === true &&
        isMocha(global));
}

function getNativeType(arg) {
    if (arg === Object) {
        return Object;
    }
    if (arg instanceof Date) {
        return Date;
    }
    if (arg instanceof RegExp) {
        return RegExp;
    }
    if (arg instanceof Array) {
        return Array;
    }
    if (arg instanceof Map) {
        return Map;
    }
    for (const [name, nativeType] of Object.entries(NATIVE_TYPES)) {
        if (arg === nativeType || typeof arg === name) {
            return nativeType;
        }
    }
    return null;
}

function getScalarType(arg) {
    switch (arg) {
        case String:
            return 'string';
        case Boolean:
            return 'boolean';
        case Number:
            return 'number';
        default:
            return null;
    }
}

function isClass(arg) {
    const { toString } = Function.prototype;
    return (typeof arg === 'function' &&
        (/class\s/.test(toString.call(arg)) ||
            /.classCallCheck/.test(toString.call(arg))));
}

const isErrorClass = function (arg) {
    return (arg != null &&
        (NATIVE_ERROR_CLASSES.includes(arg) ||
            (arg.prototype !== undefined && arg.prototype instanceof Error)));
};

function isClassInstance(arg) {
    return (arg != null && (isClass(arg.constructor) || isErrorClass(arg.constructor)));
}

function isConstructor(arg) {
    try {
        new arg();
    }
    catch (err) {
        return false;
    }
    return true;
}

function getTypeName(arg) {
    if (arg == null) {
        return undefined;
    }
    if (isClass(arg)) {
        if (Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg)) {
            return Reflect.getOwnMetadata(TYPE_NAME_KEY, arg);
        }
        return arg.name;
    }
    if (isClassInstance(arg)) {
        if (Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg.constructor)) {
            return Reflect.getOwnMetadata(TYPE_NAME_KEY, arg.constructor);
        }
        return arg.constructor.name;
    }
    if (isConstructor(arg)) {
        return arg.name;
    }
    if (arg.constructor !== undefined) {
        return arg.constructor.name;
    }
    return undefined;
}

function hasTypeName(arg) {
    if (arg == null) {
        return false;
    }
    if (isClass(arg)) {
        return Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg);
    }
    if (isClassInstance(arg)) {
        return Reflect.hasOwnMetadata(TYPE_NAME_KEY, arg.constructor);
    }
    return false;
}

function setTypeName(arg, typeName) {
    if (arg == null) {
        return;
    }
    Reflect.defineMetadata(TYPE_NAME_KEY, typeName, arg);
}

function isErrorInstance(arg) {
    return arg != null && isErrorClass(arg.constructor);
}

function isMultidimensionalArray(arg) {
    if (!Array.isArray(arg)) {
        return false;
    }
    for (const element of arg) {
        if (Array.isArray(element)) {
            return true;
        }
    }
    return false;
}

function isNativeType(arg) {
    return arg == null || Object.values(NATIVE_TYPES).includes(arg);
}

function isNativeTypeInstance(arg) {
    if (isConstructor(arg))
        return false;
    if (Object.values(NATIVE_TYPES).includes(arg))
        return false;
    if (arg == null)
        return false;
    if (arg.constructor) {
        const isIncluded = NATIVE_CONSTRUCTOR_NAMES.includes(arg.constructor.name);
        if (isIncluded)
            return true;
    }
    return false;
}

function isScalarType(arg) {
    return getScalarType(arg) !== null;
}

function isSubclassOf(child, parent) {
    const isSubclass = isClass(child) && child.prototype instanceof parent;
    const isSameClass = child === parent;
    return isSubclass || isSameClass;
}

function superClass(child) {
    if (child == null) {
        return undefined;
    }
    let ctor;
    if (!isClass(child)) {
        ctor = child.constructor;
    }
    else {
        ctor = child;
    }
    const parent = Object.getPrototypeOf(ctor);
    if (parent != null && parent.name !== '' && isClass(parent)) {
        return parent;
    }
    return undefined;
}

function superPrototype(child) {
    const foundSuperClass = superClass(child);
    return foundSuperClass != null ? foundSuperClass.prototype : undefined;
}

exports.LITERAL = literal;
exports.METADATA_KEYS = metadataKeys;
exports.getNativeType = getNativeType;
exports.getScalarType = getScalarType;
exports.getTypeName = getTypeName;
exports.hasTypeName = hasTypeName;
exports.isClass = isClass;
exports.isClassInstance = isClassInstance;
exports.isConstructor = isConstructor;
exports.isErrorClass = isErrorClass;
exports.isErrorInstance = isErrorInstance;
exports.isMocha = isMocha;
exports.isMochaInWatchMode = isMochaInWatchMode;
exports.isMultidimensionalArray = isMultidimensionalArray;
exports.isNativeType = isNativeType;
exports.isNativeTypeInstance = isNativeTypeInstance;
exports.isScalarType = isScalarType;
exports.isSinonClockDate = isSinonClockDate;
exports.isSubclassOf = isSubclassOf;
exports.setTypeName = setTypeName;
exports.superClass = superClass;
exports.superPrototype = superPrototype;
