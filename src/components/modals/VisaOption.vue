<template>
    <div
      :class="[
        'visa-option p-6 bg-white rounded-lg shadow-md transition duration-300 cursor-pointer',
        selected ? 'border-2 border-indigo-600' : 'border border-gray-300 hover:shadow-lg'
      ]"
      @click="selectOption"
    >
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <button class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
        Select
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisaOption',
    props: {
      title: String,
      description: String,
      selected: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      selectOption() {
        this.$emit('select');
      }
    }
  }
  </script>
  