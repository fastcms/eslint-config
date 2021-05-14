const fs = require('fs');
const path = require('path');
const { getPackages } = require('@monorepo-utils/package-utils');

const project = [];
const defaultProject = path.resolve(__dirname, '..', 'tsconfig.eslint.json');
const projectRoot = process.cwd() || '.';
const rootESLintTSConfig = path.join(projectRoot, './tsconfig.eslint.json');
const rootTSConfig = path.join(projectRoot, './tsconfig.json');
const packages = getPackages(projectRoot);

if (fs.existsSync(rootESLintTSConfig)) {
  project.push(rootESLintTSConfig);
} else if (fs.existsSync(rootTSConfig)) {
  project.push(rootTSConfig);
} else if (packages.length > 0) {
  project.push(
    ...packages
      .map((pkg) => {
        const workspaceESLintTSConfig = path.join(pkg.location, './tsconfig.eslint.json');
        const workspaceTSConfig = path.join(pkg.location, './tsconfig.json');

        if (fs.existsSync(workspaceESLintTSConfig)) {
          return workspaceESLintTSConfig;
        }

        if (fs.existsSync(workspaceTSConfig)) {
          return workspaceTSConfig;
        }

        return null;
      })
      .filter((v) => v),
    defaultProject,
  );
} else {
  project.push(defaultProject);
}

module.exports = project;
