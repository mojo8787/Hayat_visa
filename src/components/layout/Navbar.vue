<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-8" src="@/assets/Logo.png" alt="Logo" />
        </div>

        <!-- Links Section (Hidden on small screens) -->
        <div class="hidden sm:flex sm:space-x-8">
          <router-link to="/"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/' }">
            Home
          </router-link>
          <router-link to="/apply-now"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/apply-now' }">
            Apply Now
          </router-link>
          <router-link to="/application-form"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/application-form' }">
            Application Form
          </router-link>
          <router-link to="/track-visa"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/track-visa' }">
            Track Visa
          </router-link>
          <router-link to="/profile"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/profile' }">
            Profile
          </router-link>
          <router-link to="/orders-list"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/orders-list' }">
            Orders List
          </router-link>
          <router-link to="/payment"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/payment' }">
            Payment
          </router-link>
          <router-link to="/cost-breakdown"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/cost-breakdown' }">
            Cost Breakdown
          </router-link>
          <router-link to="/reports"
            class="text-gray-900 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-300 ease-in-out"
            :class="{ 'text-indigo-500 border-indigo-500': $route.path === '/reports' }">
            Reports
          </router-link>
        </div>

        <!-- Mobile Menu Button (Visible on small screens) -->
        <div class="-mr-2 flex sm:hidden">
          <button @click="toggleMenu" type="button"
            class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-300 ease-in-out"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..." />
              <!-- Add your path data -->
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Toggleable) -->
    <div v-if="mobileMenuOpen" id="mobile-menu" class="sm:hidden transition-transform transform duration-300 ease-out">
      <div class="pt-2 pb-3 space-y-1">
        <router-link to="/"
          class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50">
          Home
        </router-link>
        <router-link to="/apply-now"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Apply Now
        </router-link>
        <router-link to="/application-form"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Application Form
        </router-link>
        <router-link to="/track-visa"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Track Visa
        </router-link>
        <router-link to="/profile"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Profile
        </router-link>
        <router-link to="/orders-list"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Orders List
        </router-link>
        <router-link to="/payment"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Payment
        </router-link>
        <router-link to="/cost-breakdown"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Cost Breakdown
        </router-link>
        <router-link to="/reports"
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          Reports
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>
