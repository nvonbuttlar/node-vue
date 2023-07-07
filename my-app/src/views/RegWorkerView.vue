<script setup>
import { ref, onMounted } from 'vue'
import CreateWorker from '../components/CreateWorker.vue'
import { getAllUsers, createWorker } from '../services/UserService'

// TO DO 
// --> Serverside validation for user input
// --> Add User to DB if conditions are met
// --> Redirect user to appropriate dashboard. 


const userCreate = (data) =>  {
  console.log('data:::', data)
  createWorker(data).then(response => {
    console.log(response);
    getAllUsers();
  });
}
</script>

<template>
  <div>
    <h1>Register as a Worker</h1>
    <CreateWorker @createUser="userCreate($event)" />
  </div>
</template>