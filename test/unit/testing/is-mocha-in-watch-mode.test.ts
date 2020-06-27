import { expect } from 'chai';
import { isMochaInWatchMode } from '../../../src/testing/is-mocha-in-watch-mode';

describe(`isMochaInWatchMode`, () => {
  it(`returns true if Mocha is in watch mode`, () => {
    const nodeProcess = {
      argv: ['first', 'second', '--watch'],
    } as NodeJS.Process;
    expect(isMochaInWatchMode(nodeProcess)).to.be.true;
  });

  it(`returns false if Mocha is not in watch mode`, () => {
    const nodeProcess = {
      argv: ['first', 'second', 'third'],
    } as NodeJS.Process;
    expect(isMochaInWatchMode(nodeProcess)).to.be.false;
  });
});
