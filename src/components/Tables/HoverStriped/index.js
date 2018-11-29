export default {
  name: 'HoverStripedTable',
  props: {
    headers: Array,
    rows: Array,
    brand: {
      default: process.env.VUE_APP_BRAND,
      type: String
    }
  }
}
