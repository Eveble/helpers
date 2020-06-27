/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts
that would made naming just hard.
*/
export namespace types {
  /* eslint-disable */ // Without it String, Boolean, Number will be converted to types not constructors classes
  export type NativeType =
    | String
    | Boolean
    | Date
    | Number
    | RegExp
    | Array<any>
    | Function
    | Record<string, any>;

  export type ScalarType = 'string' | 'boolean' | 'number';

  export type TypeName = string;
}
