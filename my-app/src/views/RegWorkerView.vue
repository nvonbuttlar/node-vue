<script setup>
import { ref, onMounted } from 'vue'
import CreateWorker from '../components/CreateWorker.vue'
import { getAllUsers, createUser } from '../services/UserService'

// TO DO 
// --> Serverside validation for user input
// --> Add User to DB if conditions are met
// --> Redirect user to appropriate dashboard. 


const userCreate = (data) =>  {
  console.log('data:::', data)
  createUser(data).then(response => {
    console.log(response);
    getAllUsers();
  });
}
</script>

<template>
  <div>
    <h1>Register</h1>
    <CreateWorker @createUser="userCreate($event)" />
  </div>
</template>