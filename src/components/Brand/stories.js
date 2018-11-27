import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import Brand from './Brand.vue'

Vue.component('Brand', Brand)

const storyConfig = (template) => ({
  componets: { Brand },
  template
})

storiesOf('Brand', module)
  .add('Brand', () => storyConfig('<Brand/>'))
