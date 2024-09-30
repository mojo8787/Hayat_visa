<template>
  <div class="payment-page">
    <Navbar />
    <PaymentDetails />
    <PaymentMethodSelector />
    <SecurePaymentNotice />
    <PayNowButton />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import PaymentDetails from '@/components/PaymentDetails.vue'
import PaymentMethodSelector from '@/components/PaymentMethodSelector.vue'
import SecurePaymentNotice from '@/components/SecurePaymentNotice.vue'
import PayNowButton from '../components/buttons/PayNowButton.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'PaymentPage',
  components: {
    Navbar,
    PaymentDetails,
    PaymentMethodSelector,
    SecurePaymentNotice,
    PayNowButton,
    Footer
  }
}
</script>