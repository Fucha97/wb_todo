const path = require('path');
const { writeFile } = require('../../utils/fs-promises');
const packageJson = require('../../package.json');

const CI_COMMIT_TAG = process.env.CI_COMMIT_TAG || 'v0.0.0';

const getFormattedName = name =>
  name.replace(/[@]/g, '').replace(/[./-]/g, '_');

const getFormattedDepsToString = deps => {
  return Object.keys(deps).reduce((acc, name, index, depsArray) => {
    const formattedString = `${name}="${deps[name]}"`;

    if (index === 0) {
      return `{${formattedString}`;
    }

    if (index === depsArray.length - 1) {
      return `${acc},${formattedString}}`;
    }

    return `${acc},${formattedString}`;
  }, '');
};

// get filtered packages - all is not secure
const getFilteredDeps = dependencies => {
  return Object.keys(dependencies).reduce((acc, fieldName) => {
    if (
      /(wildberries)|(mihanizm56)|(ravilm)|(projectVersion)|(^react$)|(^react-dom$)/.test(
        fieldName,
      )
    ) {
      const formattedFieldName = getFormattedName(fieldName);

      return { ...acc, [formattedFieldName]: dependencies[fieldName] };
    }

    return acc;
  }, {});
};

const bin = async () => {
  // read fields
  const { dependencies } = packageJson;

  // filter objects
  const filteredDeps = getFilteredDeps({
    ...dependencies,
    projectVersion: CI_COMMIT_TAG,
  });

  // stringify objects
  const formattedDeps = getFormattedDepsToString(filteredDeps);

  // write special file
  await writeFile(
    path.join(process.cwd(), 'build', 'package-versions.txt'),
    `portal_frontend_package_versions${formattedDeps} 1`,
  );
};

bin();
