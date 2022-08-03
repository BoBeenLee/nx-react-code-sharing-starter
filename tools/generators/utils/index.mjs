export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const toUppercaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toKebabCase = (str) => {
  return str.toLowerCase().replace(/ /g, '-');
};

export const toPascalCase = (str) => {
  return toUppercaseFirstLetter(camelize(str));
};

export const toExtensionTxtToTsx = (str) => {
  return str.toLowerCase().replace(/txt/g, 'tsx');
};

export const toFileNameWithExtensionTsx = (
  componentFileName,
  componentName
) => {
  return toExtensionTxtToTsx(componentFileName).replace(
    `component`,
    componentName
  );
};
