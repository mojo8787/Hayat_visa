<template>
  <div class="application-form-page">
    <Navbar />

    <!-- Progress Bar for showing current step with labels and transition effect -->
    <ProgressBar :currentStep="currentStep" :stepLabels="stepLabels" />

    <!-- Dynamic Form Step Rendering -->
    <transition name="fade" mode="out-in">
      <div :key="currentStep">
        <div v-if="currentStep === 1">
          <PersonalInfoForm v-model="formData.personalInfo" :validation="v$.formData.personalInfo" />
        </div>

        <div v-if="currentStep === 2">
          <DocumentsForm v-model="formData.documents" :validation="v$.formData.documents" />
        </div>

        <div v-if="currentStep === 3">
          <PaymentForm v-model="formData.payment" :validation="v$.formData.payment" />
        </div>
      </div>
    </transition>

    <!-- Navigation Buttons -->
    <NextBackButtons :currentStep="currentStep" @next="nextStep" @back="prevStep" @submit="submitForm" />

    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Navbar from '../components/layout/Navbar.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import PersonalInfoForm from '../components/forms/PersonalInfoForm.vue'
import DocumentsForm from '../components/forms/DocumentsForm.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import NextBackButtons from '../components/buttons/NextBackButtons.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'ApplicationFormPage',
  components: {
    Navbar,
    ProgressBar,
    PersonalInfoForm,
    DocumentsForm,
    PaymentForm,
    NextBackButtons,
    Footer
  },
  setup() {
    const formData = ref({
      personalInfo: {},
      documents: null,
      payment: null
    })

    const rules = {
      formData: {
        personalInfo: {
          fullName: { required },
          dateOfBirth: { required },
          nationality: { required },
          passportNumber: { required, minLength: minLength(6) },
          email: { required, email }
        },
        documents: {
          documents: { required, minLength: minLength(1) }
        },
        payment: {
          payment: { required }
        }
      }
    }

    const v$ = useVuelidate(rules, { formData })

    return { formData, v$ }
  },
  data() {
    return {
      currentStep: 1,
      stepLabels: ['Step 1: Personal Info', 'Step 2: Documents', 'Step 3: Payment']
    }
  },
  computed: {
    safePersonalInfo() {
      return this.formData && this.formData.personalInfo
        ? this.formData.personalInfo.someProperty
        : null;
    }
  },
  methods: {
    async nextStep() {
      const isFormValid = await this.v$.$validate()
      if (!isFormValid) {
        alert("Please correct the errors before proceeding.");
      } else {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    async submitForm() {
      const isFormValid = await this.v$.$validate()
      if (isFormValid) {
        console.log('Form Data:', this.formData);
        alert('Form submitted successfully!');
      } else {
        alert("Please correct the errors before submitting.");
      }
    },
    setFormData(data) {
      this.formData = {
        ...data,
        personalInfo: data.personalInfo || {} // Ensure personalInfo exists
      };
    }
  }
}
</script>
