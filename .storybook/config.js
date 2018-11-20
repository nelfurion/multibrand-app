import { configure, addDecorator } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'

import Vue from 'vue';

const req = require.context('../src/components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(VueInfoAddon)

configure(loadStories, module);
