<template>
    <div class="progress-bar">
      <div
        class="progress-bar-inner"
        :style="{ width: progressPercentage + '%' }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['currentStep'],
    computed: {
      progressPercentage() {
        return (this.currentStep / 3) * 100; // Adjust depending on the number of steps
      }
    }
  }
  </script>
  
  <style scoped>
  .progress-bar {
    background-color: #e0e0e0;
    height: 10px;
    width: 100%;
    border-radius: 5px;
  }
  .progress-bar-inner {
    height: 100%;
    background-color: #4caf50;
    border-radius: 5px;
  }
  </style>
  