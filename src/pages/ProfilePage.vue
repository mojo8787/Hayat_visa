<template>
  <div class="profile-page min-h-screen bg-gray-100">
    <Navbar />
    <div
      class="profile-content container mx-auto flex flex-col md:flex-row mt-8 p-4 space-y-6 md:space-y-0 md:space-x-6">
      <div class="sidebar-section bg-white shadow-md rounded-lg p-6 w-full md:w-1/4">
        <Sidebar />
      </div>
      <div class="profile-info-section bg-white shadow-md rounded-lg p-6 w-full md:w-3/4">
        <ProfileInfoForm />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Sidebar from '../components/layout/Sidebar.vue'
import ProfileInfoForm from '../components/forms/ProfileInfoForm.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'ProfilePage',
  components: {
    Navbar,
    Sidebar,
    ProfileInfoForm,
    Footer
  }
}
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .profile-content {
    flex-direction: column;
  }
}
</style>
