/**
 * Evaluates if Mocha is running in watch('--watch') mode.
 * @returns Returns true if Mocha is running in watch mode, else false.
 */
export function isMochaInWatchMode(): boolean {
  return process.argv.slice(2).includes('--watch');
}
