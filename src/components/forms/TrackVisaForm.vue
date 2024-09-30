<template>
    <form class="track-visa-form bg-white p-6 rounded-lg shadow-md max-w-md mx-auto" @submit.prevent="trackVisa">
      <h2 class="text-2xl font-bold mb-4">Track Your Visa Application</h2>
      
      <div class="mb-4">
        <label for="applicationId" class="block text-gray-700 mb-2">Application ID</label>
        <input
          id="applicationId"
          v-model="applicationId"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md"
          required
        >
      </div>
  
      <div class="mb-4">
        <label for="lastName" class="block text-gray-700 mb-2">Last Name</label>
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md"
          required
        >
      </div>
  
      <button
        type="submit"
        class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Track Visa
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'TrackVisaForm',
    data() {
      return {
        applicationId: '',
        lastName: ''
      };
    },
    methods: {
      trackVisa() {
        // Handle visa tracking logic here
        console.log('Tracking visa for:', this.applicationId, this.lastName);
        // You can add API calls or other logic here
      }
    }
  };
  </script>
  