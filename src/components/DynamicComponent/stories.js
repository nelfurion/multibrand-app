import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import DynamicComponent from './DynamicComponent.vue'

Vue.component('DynamicComponent', DynamicComponent)

const storyConfig = (template) => ({
  componets: { DynamicComponent },
  template
})

storiesOf('DynamicComponent', module)
  .add('story as a template', () => storyConfig('<dynamic-component name="Header" />'))
