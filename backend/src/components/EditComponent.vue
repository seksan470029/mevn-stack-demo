<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Update goes here -->
      <h1>Edit Data</h1>
      <form @submit.prevent="handleUpdateForm">
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
          <button class="btn btn-success">Update</button>
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
        user: {}
      }
    },
    created() {
      let apiURL = `http://localhost:4000/api/edit-user/${this.$route.params.id}`;
      axios.get(apiURL).then((res) => {
        this.user = res.data
      })
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:4000/api/update-user/${this.$route.params.id}`;

        axios.put(apiURL, this.user).then((res) => {
          console.log(res);
          this.$router.push('/view')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>