<template>
    <div class="search-result p-6 bg-white rounded-lg shadow-md">
      <h3 class="text-lg font-bold mb-2">Application Status</h3>
      <p :class="statusClass">{{ status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchResult',
    props: {
      status: {
        type: String,
        default: 'Pending'
      }
    },
    computed: {
      statusClass() {
        // Conditionally assign classes based on status
        if (this.status === 'Approved') {
          return 'text-green-600 font-semibold';
        } else if (this.status === 'Rejected') {
          return 'text-red-600 font-semibold';
        } else {
          return 'text-yellow-600 font-semibold';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optionally add more specific styling here */
  </style>
  