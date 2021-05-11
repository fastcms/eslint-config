import { ESLint, Linter } from 'eslint';

/**
 * Get first lint message of lint result.
 *
 * @param fileToLint - File to lint with ESLint
 * @returns - First lint message of lint result
 * @throws - Lint files error
 */
async function getLintMessage(fileToLint: string): Promise<Linter.LintMessage> {
  try {
    const eslint = new ESLint({ ignore: false });
    const lintResult = await eslint.lintFiles(fileToLint);

    return lintResult[0].messages[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getLintMessage;
