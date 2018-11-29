import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import BrandedButton from './BrandedButton.vue'
import Brand from '../Brand/Brand.vue'
import template from './story.html'

Vue.component('BrandedButton', BrandedButton)

const storyConfig = (template) => ({
  componets: { BrandedButton },
  template
})

storiesOf('BrandedButton', module)
  .addDecorator(() => ({
    template
  }))
  .add('BrandedB  utton primary', () => storyConfig('<BrandedButton type="primary" />'))
  .add('BrandedButton secondary', () => storyConfig('<BrandedButton type="secondary" />'))
