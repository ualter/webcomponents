import { configure, addDecorator, addParameters } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';

addDecorator(addReadme);
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: create({
        base: 'light',
        brandTitle: 'UJR CENTRAL UI',
        brandUrl: 'http://google.es'
    }),
    storySort: undefined,
  },
  readme: {
    codeTheme: 'github'
  }
});


function loadStories() {
    require('../stories.js');
}

configure(loadStories, module);