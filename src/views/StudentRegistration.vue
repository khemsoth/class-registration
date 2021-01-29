<template>
  <div>
    <h1>Student Registration</h1>
    <h3>Please fill out the form below</h3>
    <StudentRegistrationForm />
  </div>
</template>

<script>
import StudentRegistrationForm from '../components/StudentRegistrationForm'

export default {
  name: 'StudentRegistration',
  components: {
    StudentRegistrationForm
  }
}
</script>

<style>

</style>