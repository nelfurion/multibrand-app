import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import HoverStripedTable from '~/Tables/HoverStriped/HoverStriped'
import StripedTable from '~/Tables/Striped/Striped'

import { rows, headers } from './default-data'
import allTablesTemplate from './all.story.html'

Vue.component('HoverStripedTable', HoverStripedTable)
Vue.component('StripedTable', StripedTable)

const data = () => ({
  rows,
  headers,
  brand: process.env.STORYBOOK_VUE_APP_BRAND
})

const propsDescription = {
  rows: 'rows of cells where each cell is added to a column in the row',
  headers: 'header of each column in the table'
}

const storyConfig = (template, components) => ({
  components,
  data,
  propsDescription,
  template
})

storiesOf('Tables')
  .add('all', () => storyConfig(
    allTablesTemplate,
    { HoverStripedTable, StripedTable }
  ))

storiesOf('Tables/HoverStripedTable', module)
  .add('hover striped table', () => storyConfig(
    '<hover-striped-table :rows="rows" :headers="headers" :brand="brand"></hover-striped-table>',
    { HoverStripedTable }
  ))

storiesOf('Tables/StripedTable', module)
  .add('hover striped table', () => storyConfig(
    '<striped-table :rows="rows" :headers="headers" :brand="brand"></striped-table>',
    { StripedTable }
  ))
