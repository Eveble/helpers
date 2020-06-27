import { expect } from 'chai';
import { getScalarType } from '../../../src/types/get-scalar-type';

describe(`getScalarType`, () => {
  class MyClass {}

  it(`returns scalar type for String`, () => {
    expect(getScalarType(String)).to.be.equal('string');
  });

  it(`returns scalar type for Number`, () => {
    expect(getScalarType(Number)).to.be.equal('number');
  });

  it(`returns null Date`, () => {
    expect(getScalarType(Date)).to.be.equal(null);
  });

  it(`returns null RegExp`, () => {
    expect(getScalarType(RegExp)).to.be.equal(null);
  });

  it(`returns null Array`, () => {
    expect(getScalarType(Array)).to.be.equal(null);
  });

  it(`returns null Function`, () => {
    expect(getScalarType(Function)).to.be.equal(null);
  });

  it(`returns null Object`, () => {
    expect(getScalarType(Object)).to.be.equal(null);
  });

  it(`returns null MyClass`, () => {
    expect(getScalarType(MyClass)).to.be.equal(null);
  });

  it(`returns null MyClass instance`, () => {
    expect(getScalarType(new MyClass())).to.be.equal(null);
  });
});
