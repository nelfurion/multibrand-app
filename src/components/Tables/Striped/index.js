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
    },
    brand: {
      default: process.env.VUE_APP_BRAND,
      type: String
    }
  }
}
