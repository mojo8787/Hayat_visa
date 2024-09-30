<template>
    <div class="next-back-buttons">
      <button v-if="currentStep > 1" @click="$emit('back')">Back</button>
      <button v-if="currentStep < 3" @click="$emit('next')">Next</button>
      <button v-if="currentStep === 3" @click="$emit('submit')">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['currentStep']
  }
  </script>
  
  <style scoped>
  .next-back-buttons {
    display: flex;
    justify-content: space-between;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  