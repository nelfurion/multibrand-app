import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import BrandedButton from './BrandedButton.vue'

process.env.asd = '@/components/BrandedButton'
import '@/stories-styles/brand1.scss'


Vue.component('BrandedButton', BrandedButton)

const storyConfig = (template) => ({
  componets: { BrandedButton },
  template
})

addDecorator(() => ({
  template: '<div style="textAlign: center"><story/></div>'
}))

storiesOf('BrandedButton', module)
  .add('BrandedButton primary', () => storyConfig('<BrandedButton type="primary" />'))
  .add('BrandedButton secondary', () => storyConfig('<BrandedButton type="secondary" />'))
