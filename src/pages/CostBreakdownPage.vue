<template>
  <div class="cost-breakdown-page">
    <Navbar />
    <CostBreakdownSummary />
    <CurrencySelector />
    <PayNowButton />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import CostBreakdownSummary from '@/components/CostBreakdownSummary.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import PayNowButton from '../components/buttons/PayNowButton.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'CostBreakdownPage',
  components: {
    Navbar,
    CostBreakdownSummary,
    CurrencySelector,
    PayNowButton,
    Footer
  }
}
</script>