import {
  toKebabCase,
  toPascalCase,
  toFileNameWithExtensionTsx,
} from '../../utils/index.mjs';

export function uiComponentsPlop(plop) {
  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'list',
        name: 'location',
        message: 'Location Folder: ',
        choices: [
          { name: 'features', value: 'features' },
          { name: 'ui-components', value: 'shared/ui-components' },
        ],
      },
      {
        type: 'list',
        name: 'featuresFolder',
        message: 'Features Folder: ',
        choices: [
          { name: 'todo', value: 'todo' },
        ],
        when(answers) {
          return answers.location === 'features';
        },
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      }
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const location = data.location;
      const featuresFolder = data.featuresFolder;
      
      const componentFileName = toKebabCase(data.componentName);
      const componentName = toPascalCase(
        data.componentName
      );
      const componentDir = `libs/${location}${
        featuresFolder ? `/${featuresFolder}/src/lib/components` : `/src/lib`
      }/${componentFileName}`;
      const layerDir = `libs/${location}${
        featuresFolder ? `/${featuresFolder}/src/lib` : `/src/lib`
      }/`;
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
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          templateFile: `${templateDir}/ui-components/${file}`,
        });
      });

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${toFileNameWithExtensionTsx(
            file,
            componentFileName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentFileName}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: `${layerDir}/index.ts`,
          template: `export * from './${componentFileName}/${componentFileName}';`,
        },
      ];
    },
  });
}
