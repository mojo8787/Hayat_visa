<template>
    <div class="status-details bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-4">Status Details</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(detail, index) in details" :key="index" class="text-gray-700">
          {{ detail }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatusDetails',
    props: {
      details: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>
  