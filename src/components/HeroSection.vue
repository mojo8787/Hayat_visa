<template>
  <section class="hero-section bg-indigo-600 text-white text-center py-20 sm:py-24 lg:py-32 px-4 relative">
    <!-- Background Image or Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-700 to-indigo-600 opacity-75"></div>

    <div class="relative max-w-3xl mx-auto">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight mb-4">
        Welcome to Visa Application Services
      </h1>
      <p class="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed mb-6">
        Fast, reliable, and secure visa processing for your travel needs
      </p>
      <button @click="applyNow"
        class="bg-white text-indigo-600 font-bold py-2 px-6 rounded-lg hover:bg-indigo-100 hover:shadow-lg hover:scale-105 transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Apply Now
      </button>
      <p class="mt-4">
        <a href="#" class="text-indigo-200 hover:text-indigo-100 underline transition duration-300">Learn More</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    applyNow() {
      // Navigate to the Apply Now page
      this.$router.push('/apply-now');
    }
  }
};
</script>

<style scoped>
.hero-section {
  /* Update the background-image path with the correct file extension */
  background-image: url('@/assets/hero-bg.jpeg');
  /* Verify this path */
  background-size: cover;
  background-position: center;
}
</style>
