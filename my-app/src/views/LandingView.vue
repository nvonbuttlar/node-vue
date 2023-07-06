<script setup>
import Card from '../components/Card.vue'

</script>

<template>
  <div>
    <h1>Welcome To Industry DB</h1>
    <p>Providing options for hire in a pinch</p>
    <p>Select the option which best suits you:</p>
    <div class="flex">
      <Card title="Organization" content="You represent an Oranization and are looking to Hire" btn1="Register"
        btn1Url="/register" />
      <Card title="Worker" content="You are ready to work and want to Connect with an Organization" btn1="Register"
        btn1Url="/register" />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.p-card {
  margin: 16px;
  padding: 16px;
  flex: 1;
  max-width: 600px;
}
</style>