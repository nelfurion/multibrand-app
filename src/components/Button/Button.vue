<template>
  <component :is="tagName" class="Button" :class="`Button--${type}`">
    <slot>Default button text</slot>
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: value => {
        return ["primary", "secondary"].indexOf(value) !== -1;
      }
    },
    href: {
      type: String
    }
  },
  computed: {
    tagName: vm => {
      if (vm.href) {
        return "a";
      }

      return "button";
    }
  }
};
</script>

<style lang="scss" scoped>
.Button {
  background-color: transparent;
  border: 1px solid #ea5a0b;
  border: 0.1rem solid #ea5a0b;
  border-radius: 0.4rem;
  color: #ea5a0b;
  cursor: pointer;
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 500px;
  max-width: 50rem;
  overflow: hidden;
  padding: 0.5em 1em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: background-color 0.3s;
  vertical-align: middle;

  &--primary {
    background-color: #ea5a0b;
    border-color: #ea5a0b;
    color: #fff;
  }
}
</style>
