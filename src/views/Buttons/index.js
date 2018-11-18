import BrandedButton from '@/components/BrandedButton/BrandedButton'

export default {
  name: 'buttons',
  components: {
    BrandedButton
  },
  computed: {
    brand () {
      return process.env.VUE_APP_BRAND
    }
  }
}
