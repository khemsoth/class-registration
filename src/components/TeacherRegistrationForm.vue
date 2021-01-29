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
        <label for="phone">Phone Number: </label>
        <input v-model="phone" type="text">
      </div>
      <div>
        <label for="email">Email: </label>
        <input v-model="email" type="email">
      </div>
      <div>
        <label for="email">specialty: </label>
        <input v-model="specialty" type="text">
      </div>
      

      <input v-on:click="instructorReg" type="button" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TeacherRegistrationForm',
  components: {

  },
  data() {
    return {
      firstName: '',
      lastName: '',
      specialty: '',
      email: '',
      phone: null
    }
  },
  methods: {
    instructorReg(e) {
      e.preventDefault()
      let instructor = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email, 
        specialty: this.specialty,
        phone: this.phone
      }
      axios.post('/api/instructors', instructor)
        .then((res) => {
          
        })
      this.firstName = '',
      this.lastName = '',
      this.email = '',
      this.major = '',
      this.specialty = '',
      this.phone = null
    }
  }
}
</script>

<style>

</style>