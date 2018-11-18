import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import BrandedButton from './BrandedButton.vue'

Vue.component('BrandedButton', BrandedButton)

storiesOf('BrandedButton', module)
  .add('BrandedButton primary', () => '<BrandedButton type="primary" />')
  .add('BrandedButton secondary', () => '<BrandedButton type="secondary" />')
