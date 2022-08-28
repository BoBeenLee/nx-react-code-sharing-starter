import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
};
