<template>
  <div class="apply-now-page">
    <Navbar />
    <VisaOptions />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import VisaOptions from '../components/modals/VisaOptions.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'ApplyNowPage',
  components: {
    Navbar,
    VisaOptions,
    Footer
  }
}
</script>