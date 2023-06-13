<script setup>
import { onMounted } from 'vue'

// lifecycle hooks
onMounted(() => {
  console.log(`Landing page Mounted`)
})
</script>

<template>
  <div>
    <h1>Welcome To Industry DB</h1>
    <p>Providing options for hire in a pinch</p>
    <p>Select the option which best suits you:</p>
    <router-link to="/register">
      <div>You Represent an Organization and are Looking to Hire Industry Workers</div>
    </router-link>
    <a href="">
      <div>You are a Workers Looking to Get Hired in the Industry</div>
    </a>
  </div>
</template>