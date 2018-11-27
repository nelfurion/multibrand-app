import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import BrandedButton from './BrandedButton.vue'
import template from './decorator.html'

Vue.component('BrandedButton', BrandedButton)

const storyConfig = (template) => ({
  componets: { BrandedButton },
  template
})

addDecorator(() => ({
  template
}))

storiesOf('BrandedButton', module)
  .add('BrandedB  utton primary', () => storyConfig('<BrandedButton type="primary" />'))
  .add('BrandedButton secondary', () => storyConfig('<BrandedButton type="secondary" />'))
