export default {
  name: 'StripedTable',
  props: {
    headers: {
      type: Array,
      default: null
    },
    rows: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    brand: process.env.VUE_APP_BRAND
  })
}
