import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import HoverStripedTable from '~/Tables/HoverStriped/HoverStriped'
import StripedTable from '~/Tables/Striped/Striped'

import { rows, headers } from './default-data'

Vue.component('HoverStripedTable', HoverStripedTable)
Vue.component('StripedTable', StripedTable)

const data = () => ({ rows, headers })

storiesOf('Tables/HoverStripedTable', module)
  .add('hover striped table', () => ({
    components: { StripedTable },
    data,
    template: '<hover-striped-table :rows="rows" :headers="headers"></hover-striped-table>'
  }))

storiesOf('Tables/StripedTable', module)
  .add('striped table', () => ({
    components: { StripedTable },
    data,
    template: '<striped-table :rows="rows" :headers="headers"></striped-table>'
  }))
