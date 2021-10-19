import getLintMessage from '../util/get-lint-messge';

const filesRoot = '__files__';

describe('Test ESLint Config', () => {
  it('no-file-to-test', async () => {
    await expect(getLintMessage(`${filesRoot}/no-file-to-test.js`)).rejects.toThrow(Error);
  });

  it('no-error', async () => {
    expect(await getLintMessage(`${filesRoot}/no-error.js`)).toBeUndefined();
  });

  it('no-console', async () => {
    const message = await getLintMessage(`${filesRoot}/no-console.js`);
    expect(message.ruleId).toEqual('no-console');
  });

  it('react-hooks/exhaustive-deps', async () => {
    const message = await getLintMessage(`${filesRoot}/ErrorIndicator.jsx`);
    expect(message.ruleId).toEqual('react-hooks/exhaustive-deps');
  });

  it('@typescript-eslint/naming-convention', async () => {
    const message = await getLintMessage(`${filesRoot}/kebab-case-interface.d.ts`);
    expect(message.ruleId).toEqual('@typescript-eslint/naming-convention');
  });

  it('@typescript-eslint/explicit-module-boundary-types', async () => {
    const message = await getLintMessage(`${filesRoot}/sum.ts`);
    expect(message.ruleId).toEqual('@typescript-eslint/explicit-module-boundary-types');
  });

  it('@typescript-eslint/ban-types', async () => {
    const message = await getLintMessage(`${filesRoot}/ErrorIndicator.tsx`);
    expect(message.ruleId).toEqual('@typescript-eslint/ban-types');
  });

  it('jsdoc:syntax', async () => {
    const message = await getLintMessage(`${filesRoot}/clamp.js`);
    expect(message.ruleId).toEqual('jsdoc/require-param-description');
  });

  it('markdown:eqeqeq', async () => {
    const message = await getLintMessage(`${filesRoot}/eqeqeq.md`);
    expect(message.ruleId).toEqual('eqeqeq');
  });

  it('markdown:react/no-array-index-key', async () => {
    const message = await getLintMessage(`${filesRoot}/no-array-index-key.md`);
    expect(message.ruleId).toEqual('react/no-array-index-key');
  });

  it('markdown:@typescript-eslint/ban-types', async () => {
    const message = await getLintMessage(`${filesRoot}/ban-types.md`);
    expect(message.ruleId).toEqual('@typescript-eslint/ban-types');
  });

  it('mdx:eqeqeq', async () => {
    const message = await getLintMessage(`${filesRoot}/eqeqeq.mdx`);
    expect(message.ruleId).toEqual('eqeqeq');
  });

  it('mdx:react/no-array-index-key', async () => {
    const message = await getLintMessage(`${filesRoot}/no-array-index-key.mdx`);
    expect(message.ruleId).toEqual('react/no-array-index-key');
  });

  it('mdx:react-hooks/exhaustive-deps', async () => {
    const message = await getLintMessage(`${filesRoot}/exhaustive-deps.mdx`);
    expect(message.ruleId).toEqual('react-hooks/exhaustive-deps');
  });

  it('mdx:Icons.stories', async () => {
    const message = await getLintMessage(`${filesRoot}/Icons.stories.mdx`);
    expect(message).toBeUndefined();
  });

  it('pretter/prettier', async () => {
    const message = await getLintMessage(`${filesRoot}/Dashboard.less.d.ts`);
    expect(message).toBeUndefined();
  });

  it('top-level-await', async () => {
    const message = await getLintMessage(`${filesRoot}/xz.mjs`);
    expect(message.ruleId).toEqual('import/no-unresolved');
  });
});
