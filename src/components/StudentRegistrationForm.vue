<template>
  <div>
    <form>
      <div>
        <label for="first-name">First Name: </label>
        <input v-model="firstName" type="text">
      </div>
      <div>
        <label for="last-name">Last Name: </label>
        <input v-model="lastName" type="text">
      </div>
      <div>
        <label for="major">Major: </label>
        <input v-model="major" type="text">
      </div>
      <div>
        <label for="email">Email: </label>
        <input v-model="email" type="email">
      </div>
      

      <input v-on:click="studentReg" type="button" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StudentRegistrationForm',
  components: {

  },
  data() {
    return {
      firstName: '',
      lastName: '',
      major: '',
      email: ''
    }
  },
  methods: {
    studentReg(e) {
      e.preventDefault()
      let student = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email, 
        major: this.major
      }
      axios.post('/api/students', student)
        .then((res) => {
          
        })
      this.firstName = '',
      this.lastName = '',
      this.email = '',
      this.major = ''
    }
  }
}
</script>

<style>

</style>