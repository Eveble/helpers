/**
 * Evaluates if Mocha is running in watch('--watch') mode.
 * @param nodeProcess - Instance of `NodeJS.Process`.
 * @returns Returns true if Mocha is running in watch mode, else false.
 */
export function isMochaInWatchMode(nodeProcess: NodeJS.Process): boolean {
  return nodeProcess.argv.slice(2).includes('--watch');
}
