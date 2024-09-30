<template>
    <div class="documents-form">
      <h2>Document Upload</h2>
      <div>
        <label for="passport">Upload Passport</label>
        <input id="passport" type="file" @change="uploadDocument" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['documents'],
    methods: {
      uploadDocument(event) {
        const file = event.target.files[0];
        this.$emit('update:documents', file);
      }
    }
  }
  </script>
  