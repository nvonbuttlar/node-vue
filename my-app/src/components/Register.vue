<script setup>
import { ref, onMounted } from 'vue'
import { getAllUsers, createUser } from '../services/UserService'

// reactive state
const count = ref(0)

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

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    <h1>Register</h1>
    TBD
  </div>
</template>