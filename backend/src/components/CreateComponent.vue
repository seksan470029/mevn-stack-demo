<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Create content here -->
      <h1>Create Data</h1>
      <form @submit.prevent="handleSubmitForm">
        <div class="mb-3">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="user.name" required>
        </div>
        <div class="mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="user.email" required>
        </div>
        <div class="mb-3">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" v-model="user.phone" required>
        </div>
        <div class="mb-3">
          <button class="btn btn-success">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        user : {
          name: '',
          email: '',
          phone: ''
        }
      }
    },
    methods: {
      handleSubmitForm(){
        let apiURL = 'http://localhost:4000/api/create-user';

        axios.post(apiURL, this.user).then(() => {
              this.$router.push('/view');
              this.user = {
                  name: '',
                  email: '',
                  phone: ''
              }
          }).catch(error => {
              console.log(error)
          })
      }
    }
  }
</script>