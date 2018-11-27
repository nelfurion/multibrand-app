import { configure, addDecorator } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'

import { withOptions } from '@storybook/addon-options';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withViewport } from '@storybook/addon-viewport';

import { options } from './options';
console.log(options);
import Vue from 'vue';

const req = require.context('../src/components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});

addDecorator(
  withOptions(options)
);

addDecorator(VueInfoAddon);

configure(loadStories, module);
