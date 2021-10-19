import { ESLint, Linter } from 'eslint';

/**
 * Get first lint message of lint result.
 *
 * @param {string} fileToLint File to lint with ESLint
 * @returns {Promise<Linter.LintMessage>} First lint message of lint result
 * @throws Get lint message error
 */
async function getLintMessage(fileToLint: string): Promise<Linter.LintMessage> {
  try {
    const eslint = new ESLint({ ignore: false });
    const lintResult = await eslint.lintFiles(fileToLint);

    return lintResult[0].messages[0];
  } catch (error: any) {
    throw new Error(error.message || 'Get lint message error');
  }
}

export default getLintMessage;
