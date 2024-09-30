<template>
    <div class="visa-options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      <VisaOption
        v-for="option in visaOptions"
        :key="option.id"
        :title="option.title"
        :description="option.description"
        :selected="selectedVisa === option.id"
        @select="selectVisa(option.id)"
      />
    </div>
  </template>
  
  <script>
  // Remove or update the incorrect import
  // import VisaOption from '../VisaOption.vue'

  export default {
    name: 'VisaOptions',
    components: {
      VisaOption
    },
    data() {
      return {
        visaOptions: [
          { id: 1, title: 'Tourist Visa', description: 'For leisure travel' },
          { id: 2, title: 'Business Visa', description: 'For business purposes' },
          { id: 3, title: 'Student Visa', description: 'For educational purposes' },
          { id: 4, title: 'Work Visa', description: 'For employment purposes' }
        ],
        selectedVisa: null
      };
    },
    methods: {
      selectVisa(id) {
        this.selectedVisa = id;
        console.log(`Visa Option Selected: ${id}`);
        // Further logic like navigation or state updates can go here
      }
    }
  }
  </script>
