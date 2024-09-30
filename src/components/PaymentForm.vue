<template>
    <div class="payment-form">
      <h2>Payment Information</h2>
      <div>
        <label for="cardNumber">Card Number</label>
        <input id="cardNumber" v-model="payment.cardNumber" type="text" required />
      </div>
      <div>
        <label for="expiryDate">Expiry Date</label>
        <input id="expiryDate" v-model="payment.expiryDate" type="month" required />
      </div>
      <!-- Add other fields as needed -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['payment'],
    methods: {
      updateField(field, value) {
        this.$emit('update:payment', { ...this.payment, [field]: value });
      }
    }
  }
  </script>
  