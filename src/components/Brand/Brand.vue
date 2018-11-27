<template lang="html">
  <div class="Brand">
    <strong>{{brand}}</strong>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  props: {
    brand: {
      default: process.env.STORYBOOK_VUE_APP_BRAND,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.Brand {
  background-color: $button-bg-color;
  display: inline-block;
  padding: 5px 5px;
  border-radius: 5px;
  color: $button-text-color;
}
</style>
