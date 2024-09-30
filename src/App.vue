<template>
    <div id="app">
      <!-- Header or logo section -->
      <div class="text-center mt-5">
        <!-- Image logo -->
        <img src="@/assets/Logo.png" alt="Hayat Logo" class="logo-image">
        
        <!-- Tagline with custom color -->
        <p class="text-logo-start mt-2">Discover new spots</p>
      </div>
      
      <!-- Main content (renders the current route's component) -->
      <router-view></router-view>
  
      <!-- Footer (optional) -->
      <!-- <footer>Your footer content here</footer> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style scoped>
  .logo-image {
    width: 200px; /* Adjust the size of the logo as needed */
    height: auto;
    margin-bottom: 1rem; /* Add space between the logo and text */
  }
  </style>