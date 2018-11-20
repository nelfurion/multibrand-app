export default {
  name: 'HoverStripedTable',
  props: {
    headers: Array,
    rows: Array
  },
  data: () => ({
    brand: process.env.VUE_APP_BRAND
  })
}
