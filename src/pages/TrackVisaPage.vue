<template>
  <div class="track-visa-page min-h-screen bg-gray-100">
    <Navbar />
    <div class="container mx-auto p-6">
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <TrackVisaForm />
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <SearchResult />
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <StatusDetails />
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 mb-8 flex justify-between items-center">
        <NotificationCheckbox />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import TrackVisaForm from '../components/forms/TrackVisaForm.vue'
import SearchResult from '../components/tables/SearchResult.vue'
import StatusDetails from '@/components/StatusDetails.vue'
import NotificationCheckbox from '../components/forms/NotificationCheckbox.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'TrackVisaPage',
  components: {
    Navbar,
    TrackVisaForm,
    SearchResult,
    StatusDetails,
    NotificationCheckbox,
    Footer
  }
}
</script>

<style scoped>
.track-visa-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Additional responsive styles for smaller devices */
@media (max-width: 768px) {
  .track-visa-page {
    padding: 5px;
  }
}
</style>
