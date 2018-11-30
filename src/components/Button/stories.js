import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'

Vue.component('Button', Button)

const storyConfig = (template) => ({
  componets: { Button },
  template
})

storiesOf('Button', module)
  .add('Button primary', () => storyConfig('<Button type="primary">View all orders</Button>'))
  .add('Button link', () => storyConfig('<Button href="http://www.zavamed.com" type="primary">Go to Zava</Button>'))
