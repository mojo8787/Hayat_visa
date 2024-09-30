<template>
  <div class="personal-info-form">
    <h2>Personal Information</h2>
    <div>
      <label for="fullName">Full Name</label>
      <input
        id="fullName"
        :value="fullName"
        @input="updateField('fullName', $event.target.value)"
        type="text"
        required
      />
    </div>
    <div>
      <label for="dateOfBirth">Date of Birth</label>
      <input
        id="dateOfBirth"
        :value="dateOfBirth"
        @input="updateField('dateOfBirth', $event.target.value)"
        type="date"
        required
      />
    </div>
    <div>
      <label for="nationality">Nationality</label>
      <input
        id="nationality"
        :value="nationality"
        @input="updateField('nationality', $event.target.value)"
        type="text"
      />
    </div>
    <div>
      <label for="passportNumber">Passport Number</label>
      <input
        id="passportNumber"
        :value="passportNumber"
        @input="updateField('passportNumber', $event.target.value)"
        type="text"
      />
    </div>
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        :value="email"
        @input="updateField('email', $event.target.value)"
        type="email"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    dateOfBirth: String,
    nationality: String,
    passportNumber: String,
    email: String,
  },
  methods: {
    updateField(field, value) {
      this.$emit(`update:${field}`, value);
    },
  },
};
</script>
