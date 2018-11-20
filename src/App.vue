<template>
  <div id="app">
    <dynamic-component name="Header" />
    <h1>Multibrand app / {{brand}}</h1>

    <striped-table :rows="rows" :headers="headers"></striped-table>
    <hover-striped-table :rows="rows" :headers="headers"></hover-striped-table>

    <router-link to="/buttons" v-if="this.$route.name !== 'Buttons'">Show me the buttons</router-link>
    <router-link to="/boxes" v-if="this.$route.name !== 'Boxes'">Show me the boxes</router-link>

    <router-view/>

  </div>
</template>

<script>

import DynamicComponent from '@/components/DynamicComponent/DynamicComponent'
import StripedTable from '@/components/Tables/Striped/Striped'
import HoverStripedTable from '@/components/Tables/HoverStriped/HoverStriped'
import { headers, rows } from '@/components/Tables/stories/default-data'

export default {
  name: 'app',
  components: {
    DynamicComponent,
    StripedTable,
    HoverStripedTable
  },
  data: () => ({
    rows,
    headers
  }),
  computed: {
    brand () {
      return process.env.VUE_APP_BRAND
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  margin: 20px;
}

body {
  margin: 0;
}
</style>
