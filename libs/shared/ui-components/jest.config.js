const rootMain = require('../../../jest.config.base.js');

module.exports = {
  displayName: 'shared-ui-components',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    ...rootMain.moduleNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/ui-components',
  testEnvironment: 'jsdom',
};
