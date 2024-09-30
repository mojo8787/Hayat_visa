<template>
    <form class="profile-info-form bg-white p-6 rounded-lg shadow-md max-w-md mx-auto" @submit.prevent="updateProfile">
      <h2 class="text-2xl font-bold mb-4">Personal Information</h2>
      
      <div class="mb-4">
        <label for="fullName" class="block text-gray-700 mb-2">Full Name</label>
        <input id="fullName" v-model="fullName" type="text" class="w-full p-2 border border-gray-300 rounded-md" required>
      </div>
      
      <div class="mb-4">
        <label for="email" class="block text-gray-700 mb-2">Email</label>
        <input id="email" v-model="email" type="email" class="w-full p-2 border border-gray-300 rounded-md" required>
      </div>
      
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 mb-2">Phone</label>
        <input id="phone" v-model="phone" type="tel" class="w-full p-2 border border-gray-300 rounded-md" required>
      </div>
      
      <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
        Update Profile
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ProfileInfoForm',
    data() {
      return {
        fullName: '',
        email: '',
        phone: ''
      }
    },
    methods: {
      updateProfile() {
        // Handle profile update logic here (e.g., send data to backend)
        console.log('Profile updated:', { fullName: this.fullName, email: this.email, phone: this.phone });
        
        // Optionally reset form fields
        this.fullName = '';
        this.email = '';
        this.phone = '';
      }
    }
  }
  </script>
  