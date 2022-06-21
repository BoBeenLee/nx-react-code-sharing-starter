export default function (plop) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const transformName = (str) => {
    return str.toLowerCase().replace(/ /g, '-');
  };

  const transformFileTxtName = (str) => {
    return str.toLowerCase().replace(/txt/g, 'tsx');
  };

  const transformComponentName = (str, replaceStr) => {
    return str.replace(`component`, replaceStr);
  };

  const transformFileName = (componentFileName, componentName) => {
    return transformComponentName(
      transformFileTxtName(componentFileName),
      componentName
    );
  };

  plop.setGenerator('shared-ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      },
      {
        type: 'list',
        name: 'layerFolder',
        message: 'Layer Folder: ',
        choices: [
          { name: 'atoms', value: 'atoms' },
          { name: 'molecules', value: 'molecules' },
          { name: 'organisms', value: 'organisms' },
          { name: 'templates', value: 'templates' },
          { name: 'others', value: 'others' },
        ],
      },
    ],
    actions: (data) => {
      const componentName = transformName(data.componentName);
      const layerFolder = data.layerFolder;

      const componentDir = `libs/shared/ui-components/src/lib/${layerFolder}/${componentName}`;
      const layerDir = `libs/shared/ui-components/src/lib/${layerFolder}`;
      const filesToAlwaysCopyOver = [
        'component.spec.txt',
        'component.stories.txt',
        'component.txt',
      ];
      const actions = [];

      // Copy over basic files
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'add',
          path: `${componentDir}/${transformFileName(file, componentName)}`,
          templateFile: `plop-templates/ui-components/${file}`,
        });
      });

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformFileName(file, componentName)}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${capitalizeFirstLetter(componentName)}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformFileName(file, componentName)}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformFileName(file, componentName)}`,
          pattern: /(-- PLOP LAYER FOLDER HERE --)/gi,
          template: `${layerFolder}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: `${layerDir}/index.ts`,
          template: `export * from './${componentName}/${componentName}';`,
        },
      ];
    },
  });
}
