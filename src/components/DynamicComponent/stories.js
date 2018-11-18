import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import DynamicComponent from './DynamicComponent.vue'

Vue.component('DynamicComponent', DynamicComponent)

storiesOf('DynamicComponent', module)
  .add('story as a template', () => '<dynamic-component name="Header" />')
