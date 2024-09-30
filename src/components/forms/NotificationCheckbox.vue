<template>
    <div class="notification-checkbox flex items-center space-x-2">
      <input
        id="notificationOpt"
        v-model="notificationEnabled"
        type="checkbox"
        class="form-checkbox h-5 w-5 text-indigo-600"
      />
      <label for="notificationOpt" class="text-gray-700">Receive email notifications for status updates</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationCheckbox',
    data() {
      return {
        notificationEnabled: false
      }
    },
    watch: {
      notificationEnabled(newValue) {
        // Handle notification preference change (e.g., save to backend or local storage)
        console.log('Notification preference changed:', newValue);
        // Example: You can add debouncing or API call here if needed
      }
    }
  }
  </script>
  