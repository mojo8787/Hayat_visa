<template>
  <div class="home-page">
    <Navbar />

    <!-- Hero Section -->
    <main>
      <HeroSection class="bg-gradient-to-r from-blue-600 to-purple-600 text-center py-24 px-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
          Revolutionize Your Workflow
        </h1>
        <p class="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Our cutting-edge service streamlines your processes, boosts productivity, and delivers unparalleled results.
        </p>
        <div class="flex justify-center space-x-4">
          <button
            class="bg-white text-blue-600 font-bold rounded-full px-8 py-3 shadow-lg hover:bg-blue-50 transition-colors duration-300 ease-in-out">
            Try It Free
          </button>
          <button
            class="bg-blue-800 bg-opacity-50 text-white font-bold rounded-full px-8 py-3 border-2 border-white shadow-lg hover:bg-opacity-70 transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </HeroSection>

      <!-- Features Section -->
      <section class="py-16 px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="card bg-gradient-to-br from-white to-gray-50 shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 class="text-lg md:text-xl font-bold tracking-wide text-gray-800">Feature One</h2>
            <p class="text-gray-600">Description of Feature One.</p>
          </div>
          <div
            class="card bg-gradient-to-br from-white to-gray-50 shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 class="text-lg md:text-xl font-bold tracking-wide text-gray-800">Feature Two</h2>
            <p class="text-gray-600">Description of Feature Two.</p>
          </div>
          <div
            class="card bg-gradient-to-br from-white to-gray-50 shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 class="text-lg md:text-xl font-bold tracking-wide text-gray-800">Feature Three</h2>
            <p class="text-gray-600">Description of Feature Three.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomePage',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/layout/Navbar.vue')),
    HeroSection: defineAsyncComponent(() => import('../components/HeroSection.vue')),
    Footer: defineAsyncComponent(() => import('../components/layout/Footer.vue')),
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 2rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  main {
    padding: 3rem;
  }
}

/* Hero Section Styling */
.hero-section {
  text-align: center;
  padding: 8rem 1.5rem;
}

.hero-section h1 {
  margin-bottom: 1.5rem;
}

.hero-section button {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
}

/* Card Styling */
.card {
  animation: fadeInUp 0.8s ease-in-out;
}

/* Footer Styling */
footer {
  background-color: #1a202c;
  color: #ffffff;
  padding: 2rem 1.5rem;
  text-align: center;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
